$(function() {
    // when let's eat button us clicked
    $(".devouredBtn").on("click", function(event) {
        var id = $(this).data("id");

        var devouredNew = {
            devoured: true
        }

        $.ajax("api/pizza/" + id, {
            type: "PUT",
            data: devouredNew
        }).then(function () {
            console.log("devoured state is now", devouredNew);

            location.reload()
        })
    });

    $(".pizza-form").on("submit", function(event) {
        event.preventDefault();

        var theNewPizza = {
            pizza_name: $(newPizza).val().trim()
        };

        console.log(theNewPizza);

        $.ajax("/api/pizza", {
            type: "POST",
            data: theNewPizza
        }).then(function () {
            console.log("new pizza added to eaten");
            location.reload();
        })
    })
});

