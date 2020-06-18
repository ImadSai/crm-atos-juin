# use app text

<app-text class="text"></app-text> to benefits sccs on typo elements

# manage colors

use @Input() color; string to change default color
default: $dark-color
if @Input() color = 'light-color' = $light-color
if @Input() color = 'color-one' = $color1
if @Input() color = 'color-two' = $color2
if @Input() color = 'color-tree' = $color3
if @Input() color = 'color-error' = $color-error
if @Input() color = 'color-success' = $color-success

# directive 

user directive ColorDirective to generate dynamicly a class name on host element div in text-component.html
