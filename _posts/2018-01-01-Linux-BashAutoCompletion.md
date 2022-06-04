---
layout: post
title:  "Bash Auto completion "
author: ismailmarmoush
image: /assets/posts/bash.png
featured: false
hidden: false
tags: linux
---

> Auto completion of Function names and Arguments for Script files

## Problem

Since, I didn't want to use Make files and I have to use normal scripts, inside these Scripts ther eare usually many
methods
here is an example

Assuming file name is `main.sh`

```
#!/bin/bash
hello(){
 echo hello $1
}
$@
```

Normally in order to call the hello function you'd say `./main.sh  hello  blabla`

But this is super long and I have to open the file tons of times in order to get the right function name,
and if it was a Make file it would've had auto completion for functions names etc.

## Solution

> Disclaimer: I tried to find other ways around to do auto completion for normal script files and found nothing

```
#!/bin/bash
#Example:hello world
hello(){
 echo hello $1
}

#Example: bye everyone
#Example:bye all koool
bye(){
  echo bye $1
}
$@
```

By adding the following code in .bashrc, any script file named ./main.sh will call completion function:

```
completion(){
    file_name=$1
    functions=$(cat $file_name | grep "^source" | sed -e 's/^source //g' | xargs echo $file_name | xargs cat | grep -o '^.*()' | tr -d '()')
	if [[ $1 == $3 ]] ; then
	    local cur
	    COMPREPLY=()
	    cur="${COMP_WORDS[COMP_CWORD]}"
	    COMPREPLY=($(compgen -W "${functions}" $cur))
	else
	    prefix="#Example:"
	    # Searching the file for "#Example: my_funciton" and removing them
	    files=$(cat $file_name | grep "^source" | sed -e 's/^source //g' | xargs echo $file_name | xargs cat )
		cmd=$(echo "$files" | grep "^$prefix\s*$3" | sed -e "s/$prefix//" -e "s/$3//" -e "s/^\s*//" )
	    local cur
		COMPREPLY=()
		cur="${COMP_WORDS[COMP_CWORD]}"
		if [[ " $(echo $functions) " == *" $3 "* ]];then
            COMPREPLY=($(compgen -W "${cmd}" $cur))
		fi
	fi
}

complete -F completion ./main.sh
```

## Result:

```
./main.sh [TAB]
hello bye kool

./main.sh hel[TAB]
hello

./main.sh bye [TAB]
everyone all kool
```

For Function completion you don't need anything , for arguments (examples) you only need to add comment starting with
the prefix
"Example:" , you can change the prefix to your liking.
