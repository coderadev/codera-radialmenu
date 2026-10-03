'use strict';

var QBRadialMenu = null;

$(document).ready(function(){
    window.addEventListener('message', function(event){
        switch (event.data.action) {
            case "ui":
                if (event.data.radial) {
                    createMenu(event.data.items)
                    QBRadialMenu.open();
                } else {
                    QBRadialMenu.close(true);
                }
        }
    });
});

function createMenu(items) {
    if (QBRadialMenu) {
        QBRadialMenu.destroy();
        QBRadialMenu = null;
    }
    document.querySelectorAll('.menuHolder').forEach(function (holder) {
        holder.remove();
    });
    QBRadialMenu = new RadialMenu({
        parent      : document.body,
        size        : 400,
        menuItems   : items,
        onClick     : function(item) {
            if (item.shouldClose) {
                QBRadialMenu.close(true);
            }
            
            if (item.items == null && item.shouldClose != null) {
                $.post('https://codera-radialmenu/selectItem', JSON.stringify({
                    itemData: item
                }))
            }
        }
    });
}

// Close on escape pressed
$(document).on('keydown', function(e) {
    switch(e.key) {
        case "Escape":
            if (QBRadialMenu) QBRadialMenu.close();
            break;
    }
});

// Close on any key up, hold/release support incase user changes keybind on the fivem side
$(document).on('keyup', function(e) {
    if (QBRadialMenu) QBRadialMenu.close();
});
