var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(241, 196, 15,1.0)',
                'rgba(46, 204, 113,1.0)',
                'rgba(52, 152, 219,1.0)',
                'rgba(155, 89, 182,1.0)',
                'rgba(231, 76, 60,1.0)',
                'rgba(230, 126, 34,1.0)'
            ],
            borderColor: [
                'rgba(243, 156, 18,1.0)',
                'rgba(39, 174, 96,1.0)',
                'rgba(41, 128, 185,1.0)',
                'rgba(142, 68, 173,1.0)',
                'rgba(192, 57, 43,1.0)',
                'rgba(211, 84, 0,1.0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
