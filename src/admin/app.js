export default {
  config: {
    locales: ["uk", "en"],
    translations: {
      uk: {
        "Auth.form.email.label": "Поштова скринька",
        "global.password": "Пароль",
        "Auth.form.password.show-password": "Показати пароль",
        "Auth.form.password.hide-password": "Приховати пароль",
        "Auth.form.rememberMe.label": "Запам'ятати мене",
        "cloud.plugin.name": "Strapi хмара",
        "Settings.application.isLoading":"Завантаження...",
        
        "content-manager.containers.Home.pluginHeaderTitle":
          "Управління контентом",
        "Content Manager": "Управління контентом",
        "global.content-manager": "Управління контентом",
        "global.plugins.content-manager": "Управління контентом",
        "content-type-builder.plugin.name": "Конструктор типів",
        "content-manager.plugin.name": "Управління контентом",
        "content-manager.header.name": "Контент",
        "content-manager.components.LeftMenu.collection-types": "Колекції",
        "content-manager.components.LeftMenu.single-types": "Конфігурації",
        "content-manager.components.LeftMenu.Search.label": "Пошук",
        "content-manager.select.currently.selected": "{count} Вибрано",
        "content-manager.containers.Edit.information.draftVersion": "Чернетки",
        "content-manager.containers.Edit.information.publishedVersion":
          "Опублікованої версії",
        "content-manager.containers.Edit.delete-entry": "Видалити запис",
        "content-manager.containers.Edit.information": "Інформація",
        "content-manager.containers.Edit.information.created": "Створено",
        "content-manager.containers.Edit.information.lastUpdate":
          "Останнє оновлення",
        "content-manager.containers.Edit.information.editing": "Редагування",
        "content-manager.containers.Edit.information.by": " ",
        "content-manager.success.record.unpublish": "Опубліковано",
        "app.utils.unpublish": "Зняти з публікації",
        "content-manager.link-to-ctb": "Редагувати модель",
        "content-manager.containers.List.draft": "Чернетка",
        "content-manager.containers.List.published": "Опубліковано",

        "app.components.EmptyStateLayout.content-document":
          "Тут пусто, будемо створювати?",
        "content-manager.HeaderLayout.button.label-add-entry": "Створити",
        "global.search": "Пошук",
        "global.settings": "Налаштування",
        "app.utils.publish": "Опублікувати",
        "global.back": "Назад",
        "notification.warning.title": "Попередження:",

        Category: "Категорія",
        "Fund Collection": "Збір коштів",
        Organization: "Організація",


        organization: "організація",

        Requisite: "Реквізити",
        "Requisite Type": "Тип реквізитів",
        User: "Користувач",

        "Remember me": "Запам'ятати мене",
      },
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#f6ecfc",
          primary200: "#e0c1f4",
          primary500: "#ac73e6",
          primary600: "#9736e8",
          primary700: "#8312d1",
          danger700: "#b72b1a",
        },
      },

      // overwrite dark theme properties
      dark: {
        // ...
      },
    },
  },
  bootstrap(app) {},
};
