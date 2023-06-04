<!-- MyChart.svelte -->

<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    let chart;
    let canvasRef;

    onMount(() => {
        const ctx = canvasRef.getContext('2d');
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My Dataset',
                    data: [12, 19, 3, 5, 2, 3, 8],
                    backgroundColor: 'rgba(46, 165, 255, 0.5)',
                    borderColor: 'rgba(46, 165, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'My Chart',
                        font: {
                            size: 16
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        grid: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    });
</script>

<div class="bg-white rounded-md shadow-md">
    <canvas class="w-full h-64 rounded-t-md" bind:this={canvasRef}></canvas>
</div>
