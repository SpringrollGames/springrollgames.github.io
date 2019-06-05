var sample_variable = "VARIABLES";

var functions = {

create_melee: {
	description:
		`<p>This function creates a new instance of <a href="#obj_melee">obj_melee</a> and initializes it with the arguments you provided.</p>
		<p>A melee hitbox is an attached hitbox that is tied to the owner's hitbox groups. It is the basis for most attacks.</p>`,
	syntax: 'create_melee(rel_x, rel_y, xscale, yscale, damage, knockback, scaling, hitlag, angle, lifetime, shape, group, [flipper]);',
	args: [
		'rel_x', 'The x offset that the hitbox will be created at. It is automatically flipped based on the direction the player is facing.',
		'rel_y', 'The y offset that the hitbox will be created at',
		'xscale', 'The xscale of the hitbox object. The base sprites are 64px wide',
		'yscale', 'The yscale of the hitbox object. The base sprites are 64px tall',
		'damage', 'The amount of damage the hitbox does',
		'knockback', 'The base knockback of the hitbox',
		'scaling', 'The number used for knockback calculation. A higher number means the move has more knockback with higher damage',
		'hitlag', 'The number of frames the attacker and the target pause when the attack hits',
		'angle', 'The base direction of the knockback. It is automatically flipped based on the direction the player is facing. Opponents can DI away from this angle slightly',
		'lifetime', 'The number of frames the hitbox is active',
		'shape', 'The sprite used for collision checking. Use the enum "HITBOX_SHAPE.sprite" for custom hitbox shapes',
		'group', 'The hitbox group that the new hitbox will be in. Each group can only hit an opponent once until the groups are reset',
		'[flipper]', 'Optional. Any special effects applied to the knockback angle. Must be from the enum "FLIPPER"'
	],
	returns: 'Real (instance ID)',
	example: {
		code:
`create_melee(10, 0, 0.6, 0.4, 5, 7, 0.3, 5, 80, 3, HITBOX_SHAPE.rectangle, 0);`,
		description:`<p>Creates a melee hitbox 10 pixels in front of the player. The hitbox will hit opponents up into the air (80 degrees) with weak knockback.
		It has only 5 frames of hitlag and lasts for 3 frame.s It doesn't have any special flippers applied.</p>`
	}
},

set_speed: {
	description:
		`<p>This function can be used to control the speed of a player instance. You can choose to change the speed relative to the current speed or to an absolute amount.</p>`,
	syntax: 'set_speed(hsp, vsp, [hsp_relative], [vsp_relative]);',
	args: [
		'hsp', 'The change in horizontal speed',
		'vsp', 'The change in vertical speed', 
		'[hsp_relative]', 'Optional. Specify whether the change in horizontal speed is relative (true) or absolute (false). By default it is false',
		'[vsp_relative]', 'Optional. Specify whether the change is vertical speed relative (true) or absolute (false). By default it is false',
	],
	returns: '---',
	example: {
		code:
`//Increase the hsp by 2
set_speed(2, 0, true, true);

//Stop the player
set_speed(0, 0);

//Decrease vsp by 10 and stop all hsp
set_speed(0, -10, false, true);`,
		description:`<p>The above code shows multiple ways to use the function for controlling player speed.</p>`
	}
},

change_facing: {
	description:
		`<p>Changes the direction the player is facing based on the control stick.</p>`,
	syntax: 'change_facing([control_stick]);',
	args: [
		'[control_stick]', 'Optional. You can set it to check the Rstick instead of the Lstick, which is the default',
	],
	returns: '---',
	example: {
		code:
`if (!on_ground(x,y))
    {
    change_facing();
    }`,
		description:`<p>The example code will make the player character face the direction of the <mark>Lstick</mark> while in the air.</p>`
	}
},

stick_direction: {
	description:
		`<p>Checks if the specified control stick is tilted in the given direction.</p>`,
	syntax: 'stick_direction(control_stick, direction);',
	args: [
		'control_stick', 'Either Lstick or Rstick',
		'direction', 'The direction that will be checked. Must be from the DIR enum',
	],
	returns: 'Bool',
	example: {
		code:
`if (stick_direction(Lstick, DIR.down))
    {
    attack_start(my_attacks[? "Dair"]);
    }`,
		description:`<p>The above code checks if the control stick is pointed downwards, and starts a Down Air attack if it is true.</p>`
	}
},

attack_start: {
	description:
		`<p>This function starts whichever attack script you pass to it. The specific effects are as follows:</p>
		<ul>
			<li>The <mark>attack_script</mark> variable is set to the passed script reference</li>
			<li>The player's state is set to the attacking state</li>
			<li>The script is run with the special phase <mark>PHASE.start</mark></li>
		</ul>`,
	syntax: 'attack_start(script)',
	args: [
		'script', 'The script that will be run as an attack. (Note: Do not put () after the script as that will run the script instead of passing it into the function)'
	],
	returns: '---',
	example: {
		code:
`if (button(INPUT.attack, buff))
    {
    attack_start(my_attacks[? "Jab"]);
    }`,
		description:`<p>If a button set to <mark>INPUT.attack</mark> has been pressed in the last few frames (determined by the macro <a href="#buff">buff</a>), the character will
		start its Jab attack.</p>`
	}
}

// end functions

}