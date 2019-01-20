(function ($) {
    var tabs = $("[data-tabs-item]");
    var contents = $("[data-tabs-content]");

    var context = $("[data-tabs]");
    tabs.each(function (i, tab) {
        $(tab).on("click", function (e) {
            tabs.each(function (i, item) {
                $(item).removeClass("active");
            });
            $(tab).addClass("active");

            var id = e.currentTarget.getAttribute("data-tabs-item");
            var content = context.find('[data-tabs-content="' + id + '"]');
            contents.each(function (i, item) {
                $(item).removeClass("active");
            });
            content.addClass('active');
            // if (content) {
            //   content.addClass("active");
            //   if (id == 1) {
            //     bookmark = "orders";
            //     chart.setBookmark("orders");
            //   }
            //   if (id == 2) {
            //     bookmark = "orders_history";
            //     chart.setBookmark("orders_history");
            //   }
            //   if (id == 3) {
            //     bookmark = "transactions_history";
            //     chart.setBookmark("transactions_history");
            //   }
            // }
        });
    });
})(jQuery);

(function ($) {
    var checkbox =  $('[data-theme-switcher] input');
    checkbox.on('change', function () {
        if (checkbox[0].checked) {
            $(document.body).removeClass('light-theme');
        } else {
            $(document.body).addClass('light-theme');
        }
    });
})(jQuery);