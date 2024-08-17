import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Sidebar from '../components/Sidebar';
import { addWidget, removeWidget } from '../features/Slicing';
import { Cspmdata} from '../Data/Data'; // Assuming Cspdata contains bar chart data

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const defaultChartData = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [],
    },
  ],
};

const CspmDashboard = () => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const categoryId = 'cspm_dashboard';

  // Select widgets from the Redux store
  const widgets = useSelector(
    (state) =>
      state.dashboard.categories.find((c) => c.id === categoryId)?.widgets ||
      []
  );

  const cloudAccountsData = Cspmdata.cloudAccountsData || defaultChartData;
  const riskAssessmentData = Cspmdata.riskAssessmentData || defaultChartData;

  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: function (chart) {
      if (chart.config.type === 'doughnut') {
        const ctx = chart.ctx;
        ctx.restore();
        const fontSize = (chart.height / 180).toFixed(2);
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'middle';

        const total = chart.data.datasets[0].data.reduce(
          (acc, data) => acc + data,
          0
        );
        const text = total.toString();
        const subtext = 'Total';

        const textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
        const subtextX = Math.round(
          (chart.width - ctx.measureText(subtext).width) / 2
        );
        const textY = chart.height / 2 - 10;
        const subtextY = chart.height / 2 + 10;

        ctx.fillText(text, textX, textY);
        ctx.fillText(subtext, subtextX, subtextY);
        ctx.save();
      }
    },
  };

  const options = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
      centerText: {
        display: true,
      },
    },
  };

  // Handle widget removal
  const handleRemoveWidget = (widgetKey) => {
    dispatch(removeWidget({ categoryId, widgetKey }));
  };

  return (
    <div className="dashboard-container">
      <h1 className="font-bold px-14 text-[14px]">CSPM Executive Dashboard</h1>
      <div className="dashboard gap justify-center">
        {/* Cloud Accounts Widget */}
        <div className="widget">
          <h3 className="w-[100%] px-[15px] font-bold">Cloud Accounts</h3>
          <div className="flex h-[26vh] mt-4 justify-between px-[25px] items-center">
            <Doughnut
              data={cloudAccountsData}
              options={options}
              plugins={[centerTextPlugin]}
            />
            <ul className="legend">
              {cloudAccountsData.labels.map((label, index) => (
                <li key={index}>
                  <span
                    className="legend-color"
                    style={{ backgroundColor: cloudAccountsData.datasets[0].backgroundColor[index] }}
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk Assessment Widget */}
        <div className="widget ">
          <h3 className="w-[100%] px-[15px] font-bold">Risk Assessment</h3>
          <div className="flex h-[26vh] mt-4 justify-between px-[25px] items-center">
            <Doughnut
              data={riskAssessmentData}
              options={options}
              plugins={[centerTextPlugin]}
            />
            <ul className="legend">
              {riskAssessmentData.labels.map((label, index) => (
                <li key={index}>
                  <span
                    className="legend-color"
                    style={{ backgroundColor: riskAssessmentData.datasets[0].backgroundColor[index] }}
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dynamically Render Selected Widgets */}
        {widgets.map((widget) => (
          <div key={widget.key} className="widget relative p-4 border rounded shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">{widget.key}</h3>
              <button
                className="remove-widget-button"
                onClick={() => handleRemoveWidget(widget.key)}
              >
                ✖
              </button>
            </div>
            <div className="flex h-[26vh] mt-4 justify-between px-[25px] items-center">
  <Doughnut
    data={Cspmdata[widget.key]?.labels ? Cspmdata[widget.key] : defaultChartData}
    options={options}
    plugins={[centerTextPlugin]}
  />
  {Cspmdata[widget.key]?.labels && (
    <ul className="legend">
      {Cspmdata[widget.key].labels.map((label, index) => (
        <li key={index}>
          <span
            className="legend-color"
            style={{
              backgroundColor:
                Cspmdata[widget.key]?.datasets[0]?.backgroundColor[index] || '#000',
            }}
          />
          {label}
        </li>
      ))}
    </ul>
  )}
</div>

          </div>
        ))}

        {/* Add Widget Button */}
        <div className="widget add-widget">
          <button
            className="add-widget-button"
            onClick={() => setShowSidebar(true)}
          >
            + Add Widget
          </button>
        </div>
      </div>

      {/* Sidebar Component */}
      {showSidebar && (
        <Sidebar
          activeWidgetType="CSPM" // Set active widget type to CSPM
          onConfirm={(widgets) => {
            widgets.forEach((widget) => {
              dispatch(addWidget({ categoryId: 'cspm_dashboard', widget }));
            });
            setShowSidebar(false);
          }}
          onCancel={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
};

export default CspmDashboard;
