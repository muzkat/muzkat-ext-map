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
/**
 * Created by bnz on 1/21/18.
 */
var muzkatApp = require('muzkat-ext-app');
var pt = new muzkatApp('MuzkatMap', 'muzkatMap', false);
pt.launchApp();
// test 1234654
},{"muzkat-ext-app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbXV6a2F0LWV4dC1hcHAvYXBwLmpzIiwic3JjL2FwcC93cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEV4dEpTIFByb3RvdHlwZSBraXQgYnkgbXV6a2F0XG4gKlxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSBtYWluQ29tcG9uZW50XG4gKiBAcGFyYW0gbG9naW5OZWVkZWRcbiAqIEByZXR1cm5zIHt7YXBwRGVzY3JpcHRvcjoge25hbWU6ICosIG1haW5Db21wb25lbnQ6ICosIGxvZ2luTmVlZGVkOiAqfSwgYXBwOiB1bmRlZmluZWQsIGxhdW5jaEFwcDogbGF1bmNoQXBwLCBkZWZpbmVCYXNlQ2xhc3M6IGRlZmluZUJhc2VDbGFzcywgc3RhcnQ6IHN0YXJ0fX1cbiAqL1xuZnVuY3Rpb24gbXV6a2F0QXBwKG5hbWUsIG1haW5Db21wb25lbnQsIGxvZ2luTmVlZGVkKSB7XG5cbiAgICB2YXIgYXBwTmFtZSA9IG5hbWU7XG4gICAgdmFyIGFwcE1haW5Db21wb25lbnQgPSBtYWluQ29tcG9uZW50O1xuICAgIHZhciBhcHBMb2dpbk5lZWRlZCA9IGxvZ2luTmVlZGVkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBwOiB1bmRlZmluZWQsXG4gICAgICAgIGFwcE5hbWU6IGFwcE5hbWUsXG4gICAgICAgIGFwcE1haW5Db21wb25lbnQ6IGFwcE1haW5Db21wb25lbnQsXG4gICAgICAgIGFwcExvZ2luTmVlZGVkOmFwcExvZ2luTmVlZGVkLFxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGRlc2NyaXB0b3JcbiAgICAgICAgICovXG4gICAgICAgIGxhdW5jaEFwcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICB0aGlzLmFwcERlc2NyaXB0b3IgPSBkZXNjcmlwdG9yO1xuICAgICAgICAgICAgdGhpcy5kZWZpbmVCYXNlQ2xhc3MoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSBtYWluQ29tcG9uZW50XG4gICAgICAgICAqIEBwYXJhbSBsb2dpbk5lZWRlZFxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5lQmFzZUNsYXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgRXh0LmRlZmluZShtZS5hcHBOYW1lICsgJy5NYWluQXBwbGljYXRpb24nLCB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kOiAnRXh0LmNvbnRhaW5lci5Db250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDogJ2ZpdCcsXG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0TG9naW46IG1lLmFwcExvZ2luTmVlZGVkLFxuICAgICAgICAgICAgICAgIG1haW5Db21wb25lbnQ6IG1lLmFwcE1haW5Db21wb25lbnQsXG5cbiAgICAgICAgICAgICAgICBpbml0Q29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXF1ZXN0TG9naW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4dHlwZTogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogJ2xvZ2luIHJlcXVpcmVkLi4uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gW3t4dHlwZTogdGhpcy5tYWluQ29tcG9uZW50fV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFBhcmVudChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5hcHAgPSBFeHQuYXBwbGljYXRpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgbWFpblZpZXc6IG1lLmFwcE5hbWUgKyAnLk1haW5BcHBsaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgbGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIEV4dC5sb2cobWUuYXBwTmFtZSArICcgYm9vdGVkIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtdXprYXRBcHA7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGJueiBvbiAxLzIxLzE4LlxuICovXG52YXIgbXV6a2F0QXBwID0gcmVxdWlyZSgnbXV6a2F0LWV4dC1hcHAnKTtcbnZhciBwdCA9IG5ldyBtdXprYXRBcHAoJ011emthdE1hcCcsICdtdXprYXRNYXAnLCBmYWxzZSk7XG5wdC5sYXVuY2hBcHAoKTtcbi8vIHRlc3QgMTIzNDY1NCJdfQ==
