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
    
    var isInitialized = false;
    
    function removeExistingSelectors() {
        // 移除已存在的语言选择器，避免重复创建
        $('.language-selector').remove();
        $('.summary-language-selector').remove();
    }
    
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
        
        // 在目录中添加语言选择器（初始状态为loading）
        var summarySelector = $('<div class="summary-language-selector loading">' +
            '<label>' + labelText + ':</label>' +
            '<select id="summaryLanguageSelect">' +
                optionsHtml +
            '</select>' +
        '</div>');
        
        // 等待DOM准备好后再添加选择器
        setTimeout(function() {
            var summary = $('.book-summary ul.summary');
            if (summary.length > 0) {
                summary.after(summarySelector);
            } else {
                // 如果找不到summary，尝试添加到侧边栏的其他位置
                var bookSummary = $('.book-summary');
                if (bookSummary.length > 0) {
                    bookSummary.append(summarySelector);
                }
            }
            
            // 设置当前语言
            setCurrentLanguage();
            
            // 绑定事件（只在初始化时绑定一次）
            if (!isInitialized) {
                bindEvents();
                isInitialized = true;
            }
            
            // 移除loading类，触发平滑显示动画
            setTimeout(function() {
                summarySelector.removeClass('loading');
            }, 50);
        }, 50);
    }
    
    function ensureLanguageSelectorExists() {
        // 检查语言选择器是否存在
        var selectorExists = $('.summary-language-selector').length > 0;
        
        if (!selectorExists) {
            // 如果不存在，重新创建
            createLanguageSelector();
        } else {
            // 如果存在，只更新语言选择（带平滑效果）
            updateLanguageSelector();
        }
    }
    
    function updateLanguageSelector() {
        var $selector = $('.summary-language-selector');
        
        // 添加updating类，显示更新状态
        $selector.addClass('updating');
        
        setTimeout(function() {
            // 更新语言选择和标签
            setCurrentLanguage();
            updateSelectorLabel();
            
            // 移除updating类
            $selector.removeClass('updating');
        }, 100);
    }
    
    function updateSelectorLabel() {
        // 更新选择器标签文本
        var currentLang = getCurrentLanguage();
        var labelText = config.label[currentLang] || config.label[config.defaultLanguage] || 'Language';
        $('.summary-language-selector label').text(labelText + ':');
    }
    
    function bindEvents() {
        // 使用事件委托，绑定到document上，避免重复绑定
        $(document).on('change', '#languageSelect, #summaryLanguageSelect', function() {
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
        // 页面切换时检查并确保语言选择器存在，而不是重新创建
        setTimeout(function() {
            ensureLanguageSelectorExists();
        }, 50);
    });
    
    // 监听侧边栏变化，确保语言选择器始终存在
    gitbook.events.bind('exercise.submit', function() {
        setTimeout(function() {
            ensureLanguageSelectorExists();
        }, 50);
    });
    
}); 