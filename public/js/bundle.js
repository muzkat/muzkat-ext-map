(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * ExtJS Prototype kit by muzkat
 *
 * @param name
 * @param mainComponent
 * @param loginNeeded
 * @returns {{appDescriptor: {name: *, mainComponent: *, loginNeeded: *}, app: undefined, launchApp: launchApp, defineBaseClass: defineBaseClass, start: start}}
 */
function muzkatApp(name, mainComponent, loginNeeded) {

    var appName = name;
    var appMainComponent = mainComponent;
    var appLoginNeeded = loginNeeded;

    return {
        app: undefined,
        appName: appName,
        appMainComponent: appMainComponent,
        appLoginNeeded:appLoginNeeded,
        /**
         *
         * @param descriptor
         */
        launchApp: function () {
            //   this.appDescriptor = descriptor;
            this.defineBaseClass();
            this.start();
        },
        /**
         *
         * @param name
         * @param mainComponent
         * @param loginNeeded
         */
        defineBaseClass: function () {
            var me = this;
            Ext.define(me.appName + '.MainApplication', {
                extend: 'Ext.container.Container',
                layout: 'fit',

                requestLogin: me.appLoginNeeded,
                mainComponent: me.appMainComponent,

                initComponent: function () {
                    var items = [];
                    if (this.requestLogin) {
                        items = [{
                            xtype: 'container',
                            html: 'login required...'
                        }]
                    } else {
                        items = [{xtype: this.mainComponent}]
                    }
                    this.items = items;
                    this.callParent(arguments);
                }
            });
        },
        /**
         *
         */
        start: function () {
            var me = this;
            this.app = Ext.application({
                name: me.appName,
                mainView: me.appName + '.MainApplication',
                launch: function () {
                    Ext.log(me.appName + ' booted!');
                }
            });
        }
    };
}

module.exports = muzkatApp;
},{}],2:[function(require,module,exports){
var muzkatApp = require('muzkat-ext-app');
var pt = new muzkatApp('MuzkatMap', 'muzkatMap', false);
pt.launchApp();
},{"muzkat-ext-app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbXV6a2F0LWV4dC1hcHAvYXBwLmpzIiwic3JjL2FwcC93cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBFeHRKUyBQcm90b3R5cGUga2l0IGJ5IG11emthdFxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gbWFpbkNvbXBvbmVudFxuICogQHBhcmFtIGxvZ2luTmVlZGVkXG4gKiBAcmV0dXJucyB7e2FwcERlc2NyaXB0b3I6IHtuYW1lOiAqLCBtYWluQ29tcG9uZW50OiAqLCBsb2dpbk5lZWRlZDogKn0sIGFwcDogdW5kZWZpbmVkLCBsYXVuY2hBcHA6IGxhdW5jaEFwcCwgZGVmaW5lQmFzZUNsYXNzOiBkZWZpbmVCYXNlQ2xhc3MsIHN0YXJ0OiBzdGFydH19XG4gKi9cbmZ1bmN0aW9uIG11emthdEFwcChuYW1lLCBtYWluQ29tcG9uZW50LCBsb2dpbk5lZWRlZCkge1xuXG4gICAgdmFyIGFwcE5hbWUgPSBuYW1lO1xuICAgIHZhciBhcHBNYWluQ29tcG9uZW50ID0gbWFpbkNvbXBvbmVudDtcbiAgICB2YXIgYXBwTG9naW5OZWVkZWQgPSBsb2dpbk5lZWRlZDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFwcDogdW5kZWZpbmVkLFxuICAgICAgICBhcHBOYW1lOiBhcHBOYW1lLFxuICAgICAgICBhcHBNYWluQ29tcG9uZW50OiBhcHBNYWluQ29tcG9uZW50LFxuICAgICAgICBhcHBMb2dpbk5lZWRlZDphcHBMb2dpbk5lZWRlZCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBkZXNjcmlwdG9yXG4gICAgICAgICAqL1xuICAgICAgICBsYXVuY2hBcHA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5hcHBEZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lQmFzZUNsYXNzKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAgICAgKiBAcGFyYW0gbWFpbkNvbXBvbmVudFxuICAgICAgICAgKiBAcGFyYW0gbG9naW5OZWVkZWRcbiAgICAgICAgICovXG4gICAgICAgIGRlZmluZUJhc2VDbGFzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIEV4dC5kZWZpbmUobWUuYXBwTmFtZSArICcuTWFpbkFwcGxpY2F0aW9uJywge1xuICAgICAgICAgICAgICAgIGV4dGVuZDogJ0V4dC5jb250YWluZXIuQ29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6ICdmaXQnLFxuXG4gICAgICAgICAgICAgICAgcmVxdWVzdExvZ2luOiBtZS5hcHBMb2dpbk5lZWRlZCxcbiAgICAgICAgICAgICAgICBtYWluQ29tcG9uZW50OiBtZS5hcHBNYWluQ29tcG9uZW50LFxuXG4gICAgICAgICAgICAgICAgaW5pdENvbXBvbmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWVzdExvZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeHR5cGU6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6ICdsb2dpbiByZXF1aXJlZC4uLidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IFt7eHR5cGU6IHRoaXMubWFpbkNvbXBvbmVudH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxQYXJlbnQoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuYXBwID0gRXh0LmFwcGxpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIG1haW5WaWV3OiBtZS5hcHBOYW1lICsgJy5NYWluQXBwbGljYXRpb24nLFxuICAgICAgICAgICAgICAgIGxhdW5jaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBFeHQubG9nKG1lLmFwcE5hbWUgKyAnIGJvb3RlZCEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbXV6a2F0QXBwOyIsInZhciBtdXprYXRBcHAgPSByZXF1aXJlKCdtdXprYXQtZXh0LWFwcCcpO1xudmFyIHB0ID0gbmV3IG11emthdEFwcCgnTXV6a2F0TWFwJywgJ211emthdE1hcCcsIGZhbHNlKTtcbnB0LmxhdW5jaEFwcCgpOyJdfQ==
