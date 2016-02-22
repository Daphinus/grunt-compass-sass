module.exports = function(grunt){
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.initConfig({
	uglify: {
		my_target: {
			files: {
				'js/script.js':['components/js/script.js']
			}//files
		}//my_target
	},//uglify
	compass:{
		dev:{
			options:{
				config:'config.rb'
			}//options
		}//dev
	},//compass
	watch:{
		options: { livereload: 12345 },
		scripts: {
			files: ['components/js/*.js'],
			tasks: ['uglify']
		},//script
		sass: {
			files:['components/scss/*.scss'],
			tasks:['compass:dev']
		},//sass
		html: {
			files:['*.html']
		}
	}
})//initConfig
grunt.registerTask('default', 'watch');
}//exports