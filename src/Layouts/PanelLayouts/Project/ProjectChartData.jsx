export const ProjectChartData = {
     labels: ["red", "blue", "green", "yellow", "purple", "white"],
     datasets: [
          {
               label: "# of votes",
               data: [12, 19, 13, 10, 5, 9],
               borderWidth: 1,
               backgroundColor: "#ffffffaa",
               borderRadius: 12,
          },
     ],
};

export const ProjectChartOptions = {
     options: {
          scales: {
               y: {
                    beginAtZero: true,
               },
          },
        },
        plugins: {
          legend: {
              display: true
          },
          toolTip: {
              display: true,
          }
        }
};
