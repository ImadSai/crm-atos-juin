# text in button

use @Input() label: string

# links

use @Input() route: string in you want a redirect to internal route
use @Input() href: string in you want a redirect to external page

# action

use @Input() action: boolean in you want to create a button action 

# text color in button 
use @Input() color: string to change default color
default: $dark-color
if @Input() color = 'light-color' = $light-color
if @Input() color = 'color-one' = $color1
if @Input() color = 'color-two' = $color2
if @Input() color = 'color-tree' = $color3
if @Input() color = 'color-error' = $color-error
if @Input() color = 'color-success' = $color-success


