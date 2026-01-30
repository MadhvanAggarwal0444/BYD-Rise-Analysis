// Initialize Charts when the page loads
window.onload = function() {
    
    // --- Chart 1: Market Sales Race (BYD vs Tesla) ---
    const ctxMarket = document.getElementById('marketChart').getContext('2d');
    new Chart(ctxMarket, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [
                {
                    label: 'BYD BEV Sales (Millions)',
                    data: [0.13, 0.32, 0.91, 1.57, 1.85, 2.25],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Tesla Deliveries (Millions)',
                    data: [0.49, 0.93, 1.31, 1.80, 1.81, 1.70],
                    borderColor: '#3b82f6',
                    borderDash: [5, 5],
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#94a3b8' } }
            },
            scales: {
                y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { ticks: { color: '#64748b' }, grid: { display: false } }
            }
        }
    });

    // --- Chart 2: Correlation (Stock vs Lithium) ---
    const ctxCorr = document.getElementById('correlationChart').getContext('2d');
    new Chart(ctxCorr, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [
                {
                    label: 'BYD Stock Price (HKD)',
                    data: [45, 170, 250, 210, 240, 280],
                    borderColor: '#ef4444',
                    yAxisID: 'y',
                    borderWidth: 3,
                    pointRadius: 5
                },
                {
                    label: 'Lithium Price Index (Raw Material)',
                    data: [15, 45, 95, 60, 25, 20],
                    borderColor: '#94a3b8',
                    backgroundColor: 'rgba(148, 163, 184, 0.1)',
                    yAxisID: 'y1',
                    borderDash: [5, 5],
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear', display: true, position: 'left',
                    title: { display: true, text: 'Stock Price (HKD)', color: '#ef4444' },
                    ticks: { color: '#ef4444' }
                },
                y1: {
                    type: 'linear', display: true, position: 'right',
                    grid: { drawOnChartArea: false },
                    title: { display: true, text: 'Lithium Cost Index', color: '#94a3b8' },
                    ticks: { color: '#94a3b8' }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        afterBody: () => "Data Insight: BYD's vertical integration (making their own batteries) allowed them to maintain stock growth even as Lithium costs peaked in 2022."
                    }
                }
            }
        }
    });
};
