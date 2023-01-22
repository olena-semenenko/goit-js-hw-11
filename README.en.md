// Використати acync/await та axios +++ // Підключити axios notiflix SimpleLightbox++++

// По сабміту форму зробити фетч-запит ++++ // Написати функцію фетч-запиту за параметрами++++++ //
Повідомлення // Після першого запиту з кожним новим пошуком отримувати повідомлення, в якому буде
написано, скільки всього знайшли зображень (властивість totalHits). Текст повідомлення - "Hooray! We
found totalHits images."++++

// Response - масив об'єктів з ключами!!!!

// У відповіді буде масив зображень, що задовольнили критерії параметрів запиту. Кожне зображення
описується об'єктом, з якого тобі цікаві тільки наступні властивості: // webformatURL - посилання на
маленьке зображення для списку карток. // largeImageURL - посилання на велике зображення. // tags -
рядок з описом зображення. Підійде для атрибуту alt. // likes - кількість лайків. // views -
кількість переглядів. // comments - кількість коментарів. // downloads - кількість завантажень. //
Якщо порожній масив - нотіфікація "Sorry, there are no images matching your search query. Please try
again."

// Рендерінг карток по шаблону - перед кожним наступним шаблоном очистити розмітку // Написати
фунцію markup та clearMarkup

// Зробити пагінацію+++++

// Pixabay API підтримує пагінацію і надає параметри page і per_page. Зроби так, щоб в кожній
відповіді приходило 40 об'єктів (за замовчуванням 20). // Початкове значення параметра page повинно
бути 1. // З кожним наступним запитом, його необхідно збільшити на 1. // У разі пошуку за новим
ключовим словом, значення page потрібно повернути до початкового, оскільки буде пагінація по новій
колекції зображень.

// Кнопка LOAD MORE ++++ // В початковому стані кнопка повинна бути прихована. // Після першого
запиту кнопка з'являється в інтерфейсі під галереєю. // При повторному сабміті форми кнопка спочатку
ховається, а після запиту знову відображається. // У відповіді бекенд повертає властивість
totalHits - загальна кількість зображень, які відповідають критерію пошуку (для безкоштовного
акаунту). Якщо користувач дійшов до кінця колекції, ховай кнопку і виводь повідомлення з текстом
"We're sorry, but you've reached the end of search results.".

// Бібліотека SimpleLightbox ++++ // Додати відображення великої версії зображення з бібліотекою
SimpleLightbox для повноцінної галереї.

// У розмітці необхідно буде обгорнути кожну картку зображення у посилання, як зазначено в
документації. // Бібліотека містить метод refresh(), який обов'язково потрібно викликати щоразу
після додавання нової групи карток зображень. // Для того щоб підключити CSS код бібліотеки в
проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// Прокручування сторінки // Зробити плавне прокручування сторінки після запиту і відтворення кожної
наступної групи зображень. Ось тобі код-підказка, але розберися у ньому самостійно.

// const { height: cardHeight } = document // .querySelector(".gallery") //
.firstElementChild.getBoundingClientRect();

// window.scrollBy({ // top: cardHeight \* 2, // behavior: "smooth", // });

<!-- # Parcel template

This project was created with Parcel. For familiarization and setting additional features [refer to documentation](https://parceljs.org/).

## Preparing a new project

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Clone this repository.
3. Change the folder name from `parcel-project-template` to the name of your project.
4. Create a new empty GitHub repository.
5. Open the project in VSCode, launch the terminal and link the project to the GitHub repository
   [by instructions](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Install the project's dependencies in the terminal with the `npm install` command.
7. Start development mode by running the `npm start` command.
8. Go to [http://localhost:1234](http://localhost:1234) in your browser.
   This page will automatically reload after saving changes to the project files.

## Files and folders

- All stylesheet parshas should be in the `src/sass` folder and imported into the page stylesheets. For example, for `index.html` the style file is named `index.scss`.
- Add images to the `src/images` folder. The assembler optimizes them, but only when deploying the production version of the project. All this happens in the cloud so as not to burden your computer, as it can take a long time on weak machines.

## Deploy

To set up a project deployment, you need to perform a few additional steps to set up your repository. Go to the `Settings` tab and in the `Actions` subsection select the `General` item.

![GitHub actions settings](./assets/actions-config-step-1.png)

Scroll the page to the last section, in which make sure the options are selected as in the following image and click `Save`. Without these settings, the build will not have enough rights to automate the deployment process.

![GitHub actions settings](./assets/actions-config-step-2.png)

The production version of the project will be automatically built and deployed to GitHub Pages, in the `gh-pages` branch, every time the `main` branch is updated. For example, after a direct push or an accepted pull request. To do this, you need to edit the `homepage` field and the `build` script in the `package.json` file, replacing `your_username` and `your_repo_name` with your own, and submit the changes to GitHub.


```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Next, you need to go to the settings of the GitHub repository (`Settings` > `Pages`) and set the distribution of the production version of files from the `/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its ID.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deployment.

More detailed information about the status can be viewed by clicking on the icon, and in the drop-down window, follow the link `Details`.

![Deployment status](./assets/status.png)

### Live page

After some time, usually a couple of minutes, the live page can be viewed at the address specified in the edited `homepage` property. For example, here is a link to a live version for this repository
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

If a blank page opens, make sure there are no errors in the `Console` tab related to incorrect paths to the CSS and JS files of the project (**404**). Most likely you have the wrong value for the `homepage` property or the `build` script in the `package.json` file.

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a special script (GitHub Action) is launched from the `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server, where the project is initialized and built before deployment.
3. If all steps are successful, the built production version of the project files is sent to the `gh-pages` branch. Otherwise, the script execution log will indicate what the problem is. -->
