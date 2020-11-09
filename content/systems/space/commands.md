---
title: "Commands"
date: 2020-11-08T23:16:47-08:00
draft: false
---

**External**

`+board [ship name]=[entry code]`: Board the specified ship using the correct code.

`+code [ship name]/[old code]=[new code]`: Change the code on the specified ship from the old code to the new code. You must have the correct current code to change it.

**Communication**

`+semit [message]`:
Emits a message to the ship location. Use this for posing ship actions in space-based roleplay.

`+sooc [message]`: Sends an OOC message to the ship location. Use this for OOC communication in space-based roleply.

**Hyperspace**

`+jump/list`: Lists the star systems available for travel via hyperdrive.

`+jump [#]`: Engage the hyperdrive and travel to the specified star system. System number can be found in `+jump/list`.

**Info**

`+scheck [skill]`: Perform a skill check from your ship.

`+scheck [skill]=[die code]`: Perform a skill check with a modifier. IE: `+scheck Piloting=+2D+0`

`+sroll [die code]`: Perform a die roll using the specified die code.

`+specs`: Display the ship's specifications.

**Movement**

`+auto [x] [y] [z]`: Move the ship to the specified coordinates within the local star system

`+intercept [#]`: Move the ship to intercept the specified contact # from `+contacts`.

`+stop`: Puts on the brakes. If your ship is moving to a set of coordinates, it stops.

`+land [#]`: Lands the ship on the specified contact # from `+contacts`.

`+land [contact #]=[landing #]`: Lands the ship on the specified landing pad for the given contact# from `+contacts`. Landing pad numbers can be found using `+scan/land [contact #]`.

`+takeoff`: Lifts the ship off its landing pad and into the local star system.

`+link [#]`: Links the ship with the targeted contact. Both the ship and the target ship must be unliked, and be equipped for linking.

`+unlink`: Unlinks the ship from whatever it is currently linked to.

**Sensors**

`+contacts`: Display sensor contacts within range of your ship.

`+scan [#]`: Focus scan a given contact. The range at which you can perform a focus scan is based on your ship's Focus Rating and the target size. Contact numbers can be found in `+contacts`.

`+scan/land [#]`: Displays the available landing zones for a given contact. Contact numbers can be found in `+contacts`.

**Zone**

`+zwall [message]`: Sends a ship-wide announcement to all connected players aboard the ship.

`+zwho`: Display connected players and locations aboard the ship.
