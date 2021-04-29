sen=$(xclip -o)
res=$(trans -brief "$sen")
notify-send -u low -t 10000 "$res" 