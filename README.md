# mathbook
## Math knowledge in one place
0. You **must** know:
    - HTML5
    - CSS3
    - JavaScript
    - React

1.  **What we need?**
    - Node.js (v18 or newer)
    - Git
    - Gatsby  

    Quick dependency install on GNU Linux, for Ubuntu and Debian based distributions, we recommend to use [Linux Mint Cinnamon](https://www.linuxmint.com/):
    - Update your system:
    ```shell
    sudo apt update && sudo apt -y upgrade
    ```
    - Install a curl package to download a file:
    ```shell
    sudo apt-get install curl
    ```
    - We will use a nvm to manage a npm versions, so please download it and install by this scrpt.
    ```shell
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```
    - Check a nvm version and set version of npm to 18 or higher:
    ```shell
    nvm --version
    nvm install 18
    nvm use 18
    ```
    - Install git control system:

    ```shell
    sudo apt install git
    ```
    - Install a Gatsby:

    ```shell
    npm install -g gatsby-cli
    ```
    - We recommend to use [Visual Studio **Codium**](https://vscodium.com/), which disabled by default a telemetry and is compatible with Visual Studio Code.  
    Install **Install Visual Studio Codium** from [flathub](https://flathub.org/apps/details/com.vscodium.codium).
2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    npm install
    npm run develop
    ```

3.  **Open the code and start developing!**

    Your site is now running at http://localhost:8000!

4.  **Learn more.**

    - [Documentation](https://www.gatsbyjs.com/docs/tutorial/part-0/#installation-guide)


# TODO
- Add SEO and metadata -> https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/  
- Add 404 page
- manifest
- Add Nav, last clicked element
- MathLibrary https://katex.org/
- https://mermaid-js.github.io/mermaid/#/
- https://www.mathjax.org/#features
- https://github.com/HarryStevens/geometric
- https://jsxgraph.uni-bayreuth.de/wp/about/index.html
- https://www.geogebra.org/m/DxRaCCZt
- Create basic Components
- https://www.imo-official.org/problems.aspx
- https://www.fuw.edu.pl/~kostecki/histmat.pdf
- https://om.mimuw.edu.pl/problems/
- https://youtu.be/UWOVipHUZaM
- https://matematykaszkolna.pl/strona/3414.html
- https://www.youtube.com/user/mathtutordvd/videos
- https://matzadanie.pl/egzamin-osmoklasisty/2022
- Czcionki w main.js, z google, najlwpeij offiline