import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Sidebar from '../components/Sidebar';
import { addWidget, removeWidget } from '../features/Slicing';
import { Cspmdata } from '../Data/Data';

// Register the chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const CspmDashboard = () => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);

  const categoryId = 'cspm_dashboard';
  const widgets = useSelector(
    (state) =>
      state.dashboard.categories.find((c) => c.id === categoryId)?.widgets ||
      []
  );

  // Data from the Cspmdata file
  const cloudAccountsData = Cspmdata.cloudAccountsData || { labels: [], datasets: [] };
  const riskAssessmentData = Cspmdata.riskAssessmentData || { labels: [], datasets: [] };

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
    cutout: '65%',
    plugins: {
      legend: {
        display: false, // Disable legend for custom display
      },
      centerText: {
        display: true,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1 className="font-bold px-14 text-[14px]">CSPM Executive Dashboard</h1>
      <div className="dashboard gap justify-center">
        {/* Cloud Accounts Widget */}
        <div className="widget">
          <h3 className="w-[100%] px-[15px] font-bold">Cloud Accounts</h3>
          <div className="flex h-[22vh] mt-4 justify-between px-[25px] items-center">
            <Doughnut
              data={cloudAccountsData}
              options={options}
              plugins={[centerTextPlugin]}
            />
            <ul className="legend">
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: '#4a90e2' }}
                ></span>
                Connected (2)
              </li>
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: '#c4d8f3' }}
                ></span>
                Not Connected (1)
              </li>
            </ul>
          </div>
        </div>

        {/* Cloud Account Risk Assessment Widget */}
        <div className="widget">
          <h3 className="font-bold w-[100%] px-[15px]">
            Cloud Account Risk Assessment
          </h3>
          <div className="flex h-[22vh] mt-6 justify-between px-[25px] items-center">
            <Doughnut
              data={riskAssessmentData}
              options={options}
              plugins={[centerTextPlugin]}
            />
            <ul className="legend">
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: '#f44336' }}
                ></span>
                Failed (1689)
              </li>
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: '#ffeb3b' }}
                ></span>
                Warning (681)
              </li>
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: '#9e9e9e' }}
                ></span>
                Not available (36)
              </li>
              <li>
                <span
                  className="legend-color"
                  style={{ backgroundColor: '#4caf50' }}
                ></span>
                Passed (7253)
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Widgets */}
        {widgets.map((widget) => (
          <div className="widget" key={widget.key}>
            <div className="flex justify-between items-center">
              <h3 className="font-bold">{widget.key}</h3>
              <button
                className="remove-widget-button"
                onClick={() =>
                  dispatch(removeWidget({ categoryId, widgetId: widget.key }))
                }
              >
                ✖
              </button>
            </div>
            <p>{widget.data}</p>
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

      {/* Sidebar for adding widgets */}
      {showSidebar && (
        <Sidebar
          onConfirm={(selectedWidgets) => {
            selectedWidgets.forEach((widget) =>
              dispatch(addWidget({ categoryId, widget }))
            );
            setShowSidebar(false);
          }}
          onCancel={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
};

export default CspmDashboard;
