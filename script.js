// 페이지 표시 함수
function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// 차트 초기화 및 생성
let chart1, chart2, chart3, chart4;

function initializeCharts() {
    const data1 = [30, 50, 20];
    const data2 = [40, 20, 30];
    const data3 = [60, 40];
    const data4 = [10, 25, 20, 25];

    chart1 = new Chart(document.getElementById('chart1'), {
        type: 'pie',
        data: {
            labels: ['Category 1', 'Category 2', 'Category 3'],
            datasets: [{ data: data1, backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'] }]
        }
    });

    chart2 = new Chart(document.getElementById('chart2'), {
        type: 'pie',
        data: {
            labels: ['Group A', 'Group B', 'Group C'],
            datasets: [{ data: data2, backgroundColor: ['#4bc0c0', '#ff9f40', '#ffcd56'] }]
        }
    });

    chart3 = new Chart(document.getElementById('chart3'), {
        type: 'pie',
        data: {
            labels: ['Segment X', 'Segment Y'],
            datasets: [{ data: data3, backgroundColor: ['#9966ff', '#ff6384'] }]
        }
    });

    chart4 = new Chart(document.getElementById('chart4'), {
        type: 'pie',
        data: {
            labels: ['Type 1', 'Type 2', 'Type 3', 'Type 4'],
            datasets: [{ data: data4, backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'] }]
        }
    });
}

// 차트 데이터 업데이트 함수
function updateCharts() {
    chart1.data.datasets[0].data = [
        document.getElementById("data1-chart1").value,
        document.getElementById("data2-chart1").value,
        document.getElementById("data3-chart1").value
    ];
    chart2.data.datasets[0].data = [
        document.getElementById("data1-chart2").value,
        document.getElementById("data2-chart2").value,
        document.getElementById("data3-chart2").value
    ];
    chart3.data.datasets[0].data = [
        document.getElementById("data1-chart3").value,
        document.getElementById("data2-chart3").value
    ];
    chart4.data.datasets[0].data = [
        document.getElementById("data1-chart4").value,
        document.getElementById("data2-chart4").value,
        document.getElementById("data3-chart4").value
    ];

    chart1.update();
    chart2.update();
    chart3.update();
    chart4.update();
}

// 페이지가 로드될 때 차트 초기화
window.onload = initializeCharts;
