---
layout: post
title: "Custom webfonts for IE 6-8"
date: 2013-06-10 00:00:00
categories: frontend ie
---

All versions of Internet Explorer are capable of displaying custom webfonts,
but the problem sometimes arises for older versions, when provided EOT font is
just being ignored. This is caused by an odd requirement for font metadata
information that the full font name should begin with the family name. You
can read more details at
[a comment in GitHub](https://github.com/fontello/fontello/issues/73#issuecomment-7791793).
  
It worth mentioning that
[FontSquirrel webfont generator](http://www.fontsquirrel.com/tools/webfont-generator)
fixes this by default, but other generators usually don't.
Here I'll describe how to do it manually.

Perhaps the simplest way to fix the issue is to change full font name to family name.
I used [Typograph](http://www.neuber.com/typograph/) for that. Some recommend using
[TTX/FontTools](http://sourceforge.net/projects/fonttools/) to decompile the TTF to XML, then
compile back to TTF, unfourtanelly it didn't work for my font for some reason.
To get EOF there is a handy tool - [ttf2eot](https://code.google.com/p/ttf2eot/).
Should the compilation fail on your system, see this
[issue](https://code.google.com/p/ttf2eot/issues/detail?id=22). Then just do:

    $ ttf2eot Font.ttf > Font.eot
    
If after reloading the page the browser still refuses to render custom font,
check the @font-face declaration in CSS for compability using
[this sample](http://css-tricks.com/snippets/css/using-font-face/).
