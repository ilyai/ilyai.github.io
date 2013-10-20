styles = "stylesheets"
scripts = "javascripts"

task :watch do
  puts "Watching Sass..."
  system "scss --watch #{styles}/sass:#{styles} -t compact"
end

task :build do
  puts "Compiling Sass..."
  system "scss -f --update #{styles}/sass:#{styles} -t compressed"
  puts "Cleanup compiled JS..."
  system "rm -v #{scripts}/scripts.js"
  puts "Verifying JS..."
  system "jshint #{scripts}/*.js"
  puts "Compiling JS..."
  system "uglifyjs -m -c -o #{scripts}/scripts.js #{scripts}/*.js"
end

