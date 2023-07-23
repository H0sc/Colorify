# what i learned

    1.) .style holt sich die styles direkt vom element-knoten und nicht vom externen sheet
    2.) .onclick overrides every preexisting eventlistener, but it will work in any browser. addEventListener will not work in pre v9 IE. 
    .attachEvent works for IE though
    3.) id liegt über class in der hierarchie
    4.) im ternary operator funktioniert logisches & nicht.

## was noch fehlt

-bei randomhex muss rgb text geändert werden:
    dafür muss erst der hextorgb umwandler fertiggestellt werden.
-bei eingabe von rgb in input wird in hextext und in rgbtext der nicht formatierte txt eingefügt. muss standardisiert werden
-wenn nur 3 zahlen eingegeben werden, erkennt script nicht, dass es sich um rgb handelt
