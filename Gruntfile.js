/**
 * Created by bnz on 30.07.17
 */
module.exports = function (grunt) {

    var projectRoot = 'src/';

// config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            /*
             options: {
             // separator: ';',
             },
             */
            app: {
                src: [projectRoot + 'app/app.js'],
                dest: 'public/js/app.debug.js'
            },
            extras: {
                src: [
                    projectRoot + 'muzkatMap/basemap.js',
                    projectRoot + 'muzkatMap/maps/osm.js',
                    projectRoot + 'muzkatMap/muzkatmap.js'
                ],
                dest: 'public/js/muzkatmap.debug.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

// plugins used
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

// default tasks
    grunt.registerTask('default', ['concat','watch']);

};