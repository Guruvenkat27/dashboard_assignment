// src/data/Cspmdata.js
export const Cspmdata = {
    cloudAccountsData: {
      labels: ["Connected", "Not Connected"],
      datasets: [
        {
          data: [2, 1],
          backgroundColor: ["#4a90e2", "#c4d8f3"],
          hoverBackgroundColor: ["#357ABD", "#B0C4DE"],
        },
      ],
    },
    riskAssessmentData: {
      labels: ["Failed", "Warning", "Not available", "Passed"],
      datasets: [
        {
          data: [1689, 681, 36, 7253],
          backgroundColor: ["#f44336", "#ffeb3b", "#9e9e9e", "#4caf50"],
          hoverBackgroundColor: ["#d32f2f", "#fbc02d", "#616161", "#388e3c"],
        },
      ],
    },
    securityMetricsData: {
      labels: ["Critical", "High", "Medium", "Low"],
      datasets: [
        {
          data: [15, 50, 150, 300],
          backgroundColor: ["#f44336", "#ff9800", "#ffeb3b", "#4caf50"],
          hoverBackgroundColor: ["#d32f2f", "#f57c00", "#fbc02d", "#388e3c"],
        },
      ],
    },
    complianceStatusData: {
      labels: ["Compliant", "Non-Compliant", "Pending"],
      datasets: [
        {
          data: [80, 10, 10],
          backgroundColor: ["#4caf50", "#f44336", "#ffeb3b"],
          hoverBackgroundColor: ["#388e3c", "#d32f2f", "#fbc02d"],
        },
      ],
    },
    systemHealthData: {
      labels: ["Healthy", "Warning", "Critical"],
      datasets: [
        {
          data: [70, 20, 10],
          backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
          hoverBackgroundColor: ["#388e3c", "#f57c00", "#d32f2f"],
        },
      ],
    },
  };
  


  export const Cwpmdata = {
    namespaceAlertsData: {
      labels: ["Namespace1", "Namespace2", "Namespace3", "Namespace4", "Namespace5"],
      datasets: [
        {
          label: "Alerts",
          data: [5, 3, 7, 2, 9],
          backgroundColor: [
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  
    workloadAlertsData: {
      labels: ["Workload1", "Workload2", "Workload3", "Workload4", "Workload5"],
      datasets: [
        {
          label: "Alerts",
          data: [4, 6, 8, 1, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(75, 192, 192, 0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  
    monthlySalesData: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales",
          data: [150, 230, 180, 200, 250],
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  
    performanceMetricsData: {
      labels: ["Metric1", "Metric2", "Metric3", "Metric4", "Metric5"],
      datasets: [
        {
          label: "Performance",
          data: [60, 70, 80, 55, 90],
          backgroundColor: [
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(255, 205, 86, 0.8)",
            "rgba(201, 203, 207, 0.8)",
            "rgba(54, 162, 235, 0.8)",
          ],
          borderColor: [
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(201, 203, 207, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  
    resourceUtilizationData: {
      labels: ["CPU", "Memory", "Disk", "Network", "I/O"],
      datasets: [
        {
          label: "Utilization",
          data: [70, 65, 80, 55, 90],
          backgroundColor: [
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 99, 132, 0.8)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  };
  
  