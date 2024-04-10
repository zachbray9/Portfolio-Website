// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//fill navbar when user is not at the top of the page
window.addEventListener('scroll', function ()
{
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 50)
    {
        navbar.classList.add('navbar-filled');
    }
    else
    {
        navbar.classList.remove('navbar-filled');
    }
});

