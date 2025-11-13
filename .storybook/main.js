const path = require('path');
//  Код для покрытия всех edge кейсов для сторибук

module.exports = {
    framework: {
        name: '@storybook/vue3-webpack5',
        options: {},
    },
    stories: ['../src/**/*.stories.@(js|ts|vue)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions'],

    webpackFinal: async (config) => {
        // Ищем vue-loader правило
        const vueRule = config.module.rules.find(
            (rule) =>
                rule.use &&
                rule.use.some((use) =>
                    typeof use === 'object' && use.loader && use.loader.includes('vue-loader')
                )
        );

        if (vueRule) {
            // Расширяем vue-loader для поддержки SCSS
            vueRule.options = {
                ...(vueRule.options || {}),
                // Это для встроенных стилей внутри .vue файлов
                customBlocks: [],
                // Добавляем обработку стилей
                compilerOptions: {
                    // Не обязательно, только если кастомные теги есть
                },
            };
        }

        // Добавляем поддержку <style lang="scss">
        config.module.rules.push({
            test: /\.scss$/,
            oneOf: [
                // для <style lang="scss" scoped> и неscoped
                {
                    resourceQuery: /module/,
                    use: [
                        'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    use: ['vue-style-loader', 'css-loader', 'sass-loader'],
                },
            ],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    },
};
