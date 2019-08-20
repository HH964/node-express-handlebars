$(document).ready( () => {

    $(".devour-form").on("submit",  (event) => {
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then( (data) => {
            // console.log(data);
            console.log(window.location);
            // reload page

        });
        location.reload();
    });
});