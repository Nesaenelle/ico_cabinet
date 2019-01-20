;
(function () {

    // var self = this;
    var clock = $('[data-clock]');
    var dateEl = clock.find('[data-clock-date]');
    var time = clock.find('[data-clock-time]');
    // var self = this;

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    update();
    setInterval(function () {
        update();
    }, 1000);

    function update() {
        var date = new Date();
        dateEl[0].innerHTML = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
        time[0].innerHTML = date.toTimeString().split(' ')[0];
    }

}());

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
    var checkbox = $('[data-theme-switcher] input');
    checkbox.on('change', function () {
        if (checkbox[0].checked) {
            $(document.body).removeClass('light-theme');
        } else {
            $(document.body).addClass('light-theme');
        }
    });
})(jQuery);


setTimeout(() => {
    var deviceManagmentTemplate = jQuery('#wallet-item-template').html();
    var result = '';
    for (let i = 0; i <= 12; i++) {
        result += deviceManagmentTemplate
            .replace(/{device}/g, 'device')
            .replace(/{location}/g, 'location')
            .replace(/{activity}/g, 'activity')
            .replace(/{ip}/g, 'ip')
    }
    $('#wallets-list').html(result);
}, 1000);


setTimeout(() => {
    var deviceManagmentTemplate = jQuery('#device-managment-template').html();
    var result = '';
    var container = $('#device-managment-table');
    for (let i = 0; i <= 20; i++) {
        result += deviceManagmentTemplate
            .replace(/{device}/g, 'device')
            .replace(/{location}/g, 'location')
            .replace(/{activity}/g, 'activity')
            .replace(/{ip}/g, 'ip')
    }
    container.html(result);
    new SimpleBar(container[0], {
        autoHide: false
    });
}, 2000);


setTimeout(() => {
    var locationManagmentTemplate = jQuery('#location-managment-template').html();
    var result = '';
    for (let i = 0; i <= 20; i++) {
        result += locationManagmentTemplate
            .replace(/{location}/g, 'location')
            .replace(/{activity}/g, 'activity')
            .replace(/{ip}/g, 'ip')
    }
    $('#location-managment-table').html(result);
}, 3000);