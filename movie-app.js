class NewMovie {
    constructor(movieName, movieRating) {
        this.movieName = movieName;
        this.movieRating = movieRating;
        this.createMovieHTML(movieName, movieRating);
    }
    createMovieHTML(name, rating) {
        $("#movieTable").append(`
        <tr class="movieInfo">
            <td>${name}</td>
            <td>${rating}</td>
            <td><button class="deleteButton">Delete</button></td>
        <tr>
        `)
    }
}

$(function () {
    $("#form").on("submit", function (e) {
        e.preventDefault();
        let movieName = $("#movieName").val();
        let movieRating = $("#movieRating").val();
        new NewMovie(movieName, movieRating);
        $("form").trigger("reset");
    })

    $("#movieTable").on("click", ".deleteButton", function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    })
})

