module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat:{
            js:{
                src:["js/jquery-3.4.1.min.js","js/main.js"],
                dest:"js/main.grunt.js"
            },
            css:{
                src:["css/normalize.css","css/styles.css","css/font-awesome.min.css"],
                dest:"css/styles.grunt.css"
            }

        },
        uglify:{
            compress:{
                files:{
                    "js/main.min.js":"<%= concat.js.dest %>"
                }
            }
        },
        cssmin:{
            compress:{
                files:{
                    "css/styles.min.css":"<%= concat.css.dest %>"
                }
            }
        },
        copy:{
            pub:{
                files:[
                    {src:"css/styles.min.css",dest:"pub/"},
                    {src:"js/main.min.js",dest:"pub/"},
                    {src:"fonts/*",dest:"pub/"},
                    {src:"img/*",dest:"pub/"},
                    {src:"img/anim/*",dest:"pub/"},
                    {src:"./.htaccess*",dest:"pub/"},
                    {src:"./*.html*",dest:"pub/"},
                    {src:"./*.php",dest:"pub/"}
                ]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    //grunt.registerTask("default",["concat","uglify","cssmin"]);
    grunt.registerTask("default",["concat","uglify","cssmin","copy"]);
}