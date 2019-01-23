<template>
<div class="dashboard-status__time">
    <span class="dashboard-status__time_date">{{date}}</span>
    <span class="dashboard-status__time_hours">{{time}}</span>
</div>
</template>

<script>
export default {
    name: "app-clock",
    data() {
        return {
            monthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            date: "",
            time: ""
        };
    },
    mounted() {
        this.update();
        setInterval(() => {
            this.update();
        }, 1000);
    },
    methods: {
        update() {
            var date = new Date();
            this.date =
                this.monthNames[date.getMonth()] +
                " " +
                date.getDate() +
                ", " +
                date.getFullYear();
            this.time = date.toTimeString().split(" ")[0];
        }
    }
};
</script>

<style scoped>
.dashboard-status__time {
    white-space: nowrap;
}
</style>
