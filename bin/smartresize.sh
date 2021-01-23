#!/bin/bash
smartthumb(){
 mogrify -path "$3" -thumbnail "$2" -quality 90 -interlace none -colorspace sRGB  -gravity center -crop 300x300+0+0 "$1"
}

export -f smartthumb

for pic in img/gallery/*
do
  smartthumb "$pic" 400 img/thumbs
done
