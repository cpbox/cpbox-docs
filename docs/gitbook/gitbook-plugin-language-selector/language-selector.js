require(['gitbook', 'jquery'], function(gitbook, $) {
    
    var config = {
        languages: [
            { code: 'en', name: 'English' },
            { code: 'zh', name: '中文' }
        ],
        defaultLanguage: 'en',
        label: {
            en: 'Language',
            zh: '语言'
        }
    };
    
    function createLanguageSelector() {
        // 生成语言选项HTML
        var optionsHtml = '';
        config.languages.forEach(function(lang) {
            optionsHtml += '<option value="' + lang.code + '">' + lang.name + '</option>';
        });
        
        // // 创建固定位置的语言选择器
        // var fixedSelector = $('<div class="language-selector">' +
        //     '<select id="languageSelect">' +
        //         optionsHtml +
        //     '</select>' +
        // '</div>');
        
        // $('body').append(fixedSelector);
        
        // 获取当前语言对应的标签
        var currentLang = getCurrentLanguage();
        var labelText = config.label[currentLang] || config.label[config.defaultLanguage] || 'Language';
        
        // 在目录中添加语言选择器
        var summarySelector = $('<div class="summary-language-selector">' +
            '<label>' + labelText + ':</label>' +
            '<select id="summaryLanguageSelect">' +
                optionsHtml +
            '</select>' +
        '</div>');
        
        var summary = $('.book-summary ul.summary');
        if (summary.length > 0) {
            summary.before(summarySelector);
        }
        
        // 设置当前语言
        setCurrentLanguage();
        
        // 绑定事件
        $('#languageSelect, #summaryLanguageSelect').on('change', function() {
            changeLanguage($(this).val());
        });
    }
    
    function getCurrentLanguage() {
        var currentPath = window.location.pathname;
        var currentLang = config.defaultLanguage;
        
        // 检测当前语言
        config.languages.forEach(function(lang) {
            var langPath = '/' + lang.code + '/';
            if (currentPath.indexOf(langPath) === 0 || 
                currentPath === '/' + lang.code || 
                currentPath === '/' + lang.code + '/') {
                currentLang = lang.code;
            }
        });
        
        return currentLang;
    }
    
    function setCurrentLanguage() {
        var currentLang = getCurrentLanguage();
        
        // 设置选择器的值
        $('#languageSelect, #summaryLanguageSelect').val(currentLang);
    }
    
    function changeLanguage(lang) {
        var currentPath = window.location.pathname;
        var newPath;
        
        // 处理不同的路径情况
        if (currentPath === '/' || currentPath === '/index.html') {
            // 根目录
            newPath = '/' + lang + '/';
        } else {
            // 检查是否在某个语言路径下
            var foundLang = false;
            config.languages.forEach(function(language) {
                var langPath = '/' + language.code + '/';
                if (currentPath.indexOf(langPath) === 0) {
                    newPath = currentPath.replace(langPath, '/' + lang + '/');
                    foundLang = true;
                }
            });
            
            if (!foundLang) {
                // 其他情况，直接跳转到对应语言的首页
                newPath = '/' + lang + '/';
            }
        }
        
        window.location.href = newPath;
    }
    
    // GitBook 事件绑定
    gitbook.events.bind('start', function(e, gitbookConfig) {
        // 尝试从GitBook配置中获取语言选择器配置
        if (gitbookConfig && gitbookConfig.pluginsConfig && gitbookConfig.pluginsConfig['language-selector']) {
            var userConfig = gitbookConfig.pluginsConfig['language-selector'];
            
            // 合并配置
            if (userConfig.languages) {
                config.languages = userConfig.languages;
            }
            if (userConfig.defaultLanguage) {
                config.defaultLanguage = userConfig.defaultLanguage;
            }
            if (userConfig.label) {
                config.label = Object.assign(config.label, userConfig.label);
            }
        }
        
        // 页面开始时创建语言选择器
        createLanguageSelector();
    });
    
    gitbook.events.bind('page.change', function() {
        // 页面切换时重新设置语言
        setTimeout(function() {
            setCurrentLanguage();
        }, 100);
    });
    
}); 