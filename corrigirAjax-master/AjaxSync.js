const getFotoGithub = function (username) {
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);
    ajax.send();

    var data = ajax.responseText;

    console.log(data.avatar_url);
};