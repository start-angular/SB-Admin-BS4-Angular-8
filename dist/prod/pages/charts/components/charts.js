var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var ChartCmp = (function () {
    function ChartCmp() {
        // lineChart
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90],
            [18, 48, 77, 9, 100, 27, 40]
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartSeries = ['Series A', 'Series B', 'Series C'];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
        };
        this.lineChartColours = [
            {
                fillColor: 'rgba(148,159,177,0.2)',
                strokeColor: 'rgba(148,159,177,1)',
                pointColor: 'rgba(148,159,177,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(148,159,177,0.8)'
            },
            {
                fillColor: 'rgba(77,83,96,0.2)',
                strokeColor: 'rgba(77,83,96,1)',
                pointColor: 'rgba(77,83,96,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(77,83,96,1)'
            },
            {
                fillColor: 'rgba(148,159,177,0.2)',
                strokeColor: 'rgba(148,159,177,1)',
                pointColor: 'rgba(148,159,177,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'Line';
        console.log('line demo');
    }
    ChartCmp.prototype.randomize = function () {
        var _lineChartData = [];
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = [];
            for (var j = 0; j < this.lineChartData[i].length; j++) {
                _lineChartData[i].push(Math.floor((Math.random() * 100) + 1));
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    ChartCmp.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartCmp.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartCmp = __decorate([
        core_1.Component({
            selector: 'charts',
            templateUrl: './pages/charts/components/charts.html',
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        })
    ], ChartCmp);
    return ChartCmp;
})();
exports.ChartCmp = ChartCmp;
