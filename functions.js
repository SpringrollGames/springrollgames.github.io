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
},

save_string_file: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'filename', '',
    'string', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

on_plat: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[x]', '',
    '[y]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Run_Stop: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Magnetized: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

hitbox_has_hit: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec_missile: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Teching: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

calculate_hitstun: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'base_knockback', '',
    'weight', '',
    'damage', '',
    'knockback_scaling', '',
    'hitstun_multiplier', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uair_ivysaur: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dspec_counter: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Run_Turnaround: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec_falcon: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_ledge_tether: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'distance', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

only_one: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Replay_Buffer_Add_Chunk: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'src_buffer', '',
    'dest_buffer', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

aerial_drift: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dspec0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Ledge_Attack: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fx_create: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'sprite', '',
    'image_speed', '',
    'index', '',
    'lifespan', '',
    'x', '',
    'y', '',
    'scale', '',
    'angle', '',
    '[layer]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fastfall: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_jump: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Jumpsquat: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec_drill: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Character_Data_Create: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'name', '',
    'script', '',
    'render', '',
    'CSS', '',
    'palette', '',
    'palette_data', '',
    'portrait', '',
    'music', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

set_hitbox_property: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'hitbox', '',
    'property', '',
    'value', '',
    '[extra]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

attack_stop: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[state]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_attached_hitbox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'hitbox_id', '',
    'relative_x', '',
    'relative_y', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Stick_Cache_Values: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    'axish', '',
    'axisv', '',
    'count', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

utilt_firebreath: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dash_grab0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

to_string: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'values...', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Lost: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nspec_roy: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nspec_shot_put: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

palette_shader_set: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[palette_sprite]', '',
    '[color]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fastfall_attack_try: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

palette_colors_get_from_sprite: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'sprite', '',
    '[column]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Replay_Load: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'filename', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Aerial: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ftilt0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Profile_Save_All: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uthrow0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Idle: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

parry_trigger: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'attacker', '',
    'target', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Attacking: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fair_slash: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dec_to_hex: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'number', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uair_mario: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

bair_k_rool: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Part_System_Init: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

b_reverse: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ftilt_angled: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uair_bowser_jr: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Extra: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

apply_knockback: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'angle', '',
    'speed', '',
    'hitlag', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Is_Grabbed: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uspec_bowser: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uspec_teleport: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dashattack0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

match_begin: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stage', '',
    'stock', '',
    'time', '',
    'stamina', '',
    '[teams]', '',
    '[extra]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uair_joker: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_targetbox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'relative_x', '',
    'relative_y', '',
    'xscale', '',
    'yscale', '',
    'damage', '',
    'base_kb', '',
    'kb_scaling', '',
    'hitlag', '',
    'angle', '',
    'lifetime', '',
    'shape', '',
    'hitbox_group', '',
    'target', '',
    '[flipper]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_windbox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'relative_x', '',
    'relative_y', '',
    'xscale', '',
    'yscale', '',
    'damage', '',
    'base_kb', '',
    'angle', '',
    'lifetime', '',
    'shape', '',
    'hitbox_group', '',
    'multihit', '',
    '[flipper]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_palette_rgba: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'color_rgba...', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

controller_any_input: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'device_number', '',
    '[stick_tilt_amount]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

calculate_smash_damage: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'base_damage', '',
    '[charge]', '',
    '[max]', '',
    '[multiplier]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Player_Init_Start: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uspec_Fox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_ledge_grab_falling: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ripple_system_destroy: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fair_mii_gunner: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Dashing: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_spot_dodge: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

calculate_damage_color: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'damage', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

die: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

apply_angle_flipper: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'base_angle', '',
    'flipper', '',
    '[attacking_player]', '',
    '[target_player]', '',
    '[knockback]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Input_Replay_Convert: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'replay_buffer', '',
    'input_buffer', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

set_speed_towards_point_accel: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'px', '',
    'py', '',
    'accel', '',
    'max', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

player_shader_set: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

palette_get_color: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'palette', '',
    'index', '',
    '[column]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

aerial_drift_momentum: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

set_projectile_overlay_sprite: {
  description: `<p></p>`,
  syntax: '',
  args: [
    ' projectile', '',
    'sprite', '',
    'frame', '',
    'speed', '',
    'scale', '',
    'angle', '',
    'color', '',
    'alpha', '',
    'facing', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_y_bounce: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Profile_Destroy: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'num', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dspec_rest: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

character_data: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

friction_gravity: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[friction]', '',
    '[gravity]', '',
    '[max_fall_speed]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dair0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

custom1: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

reset_hitbox_group: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'group_number', '',
    '[collided_list]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

calculate_knockback: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'target_hp', '',
    'damage', '',
    'weight', '',
    'scaling', '',
    'base_knockback', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Speed_Fraction: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_upward_grounds: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

hit_fx_style_create: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'fx_style', '',
    'angle', '',
    'target', '',
    'knockback', '',
    '[layer]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Parrying: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

buffer_reset: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'buffer', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nair_ike: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Screen_KO: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nspec0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Replay_Save: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'filename', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

custom0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_drop_through: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Ledge_Hang: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_bounce_: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fair_shulk: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ds_list_deepcopy: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

bthrow_drag: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_pummel: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

hit_sfx_play: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'sounds', '',
    '[pitch_shift]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Custom: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_landing: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fair0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Detectbox_Collide: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec_core_enforcer: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

grab_release_held: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

CSS_Next_Color: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'character', '',
    'current', '',
    'direction', '',
    'self', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Profile_Get: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'profile_num', '',
    'setting', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nspec_charge_shot_draw: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

bitflag_read: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'number', '',
    'pos', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Hitstun: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ripple_effect_create: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

calculate_shieldstun: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'damage', '',
    'multiplier', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Knocked_Out: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_run_stop: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

player_set_renderer: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'object', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

di_direction: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'initial_direction', '',
    'stick_x', '',
    'stick_y', '',
    'max_di', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ripple_system_draw: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec_wind: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_projectile: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'relative_x', '',
    'relative_y', '',
    'xscale', '',
    'yscale', '',
    'damage', '',
    'base_kb', '',
    'kb_scaling', '',
    'angle', '',
    'lifetime', '',
    'shape', '',
    'hsp', '',
    'vsp', '',
    '[flipper]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

approach: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'current', '',
    'target', '',
    'amount', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_rolling: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Techrolling: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

bitflag_write: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'number', '',
    'pos', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_hit_platforms_: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Flinch: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

usmash0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

draw_character_button: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x', '',
    'y', '',
    'w', '',
    'h', '',
    'sprite', '',
    'name', '',
    '[color]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uair0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_grab: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

all_connected_controllers: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

bair0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Player_Draw_Self: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[x]', '',
    '[y]', '',
    '[scale_multiplier]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Ledge_Trump: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_x: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Knockdown: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Spot_Dodge: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

is_finishing_blow: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'full_knockback', '',
    'target_x', '',
    'target_y', '',
    'angle', '',
    'hitstun_frames', '',
    'target_id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

roll_move: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'edge_buffer', '',
    'speed', '',
    'direction', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fair_mario: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_detectbox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'relative_x', '',
    'relative_y', '',
    'xscale', '',
    'yscale', '',
    'lifetime', '',
    'shape', '',
    'hitbox_group', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Tumble: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

hex_to_dec: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'string', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Ledge_Tether: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_grounds: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_specials: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

attack_has_hit: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Projectile_Collide: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ripple_effect_destroy: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Lag: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Respawning: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Replay_Buffer_Load_Chunk: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'src_buffer', '',
    'dest_buffer', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Tech_Wall_Jump: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dtilt_belmont: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

stick_get_distance: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    '[frame]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

attack_set_cooldown: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'cooldown', '',
    '[attack_script]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

background_clear_activate: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'length', '',
    'color', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ledgeattack0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Choose_Stick_By_Input: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[possible_inputs]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_aerials: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

set_invulnerable: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'type', '',
    'time', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

cancel_ground_check: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_grab: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'relative_x', '',
    'relative_y', '',
    'xscale', '',
    'yscale', '',
    'xhold', '',
    'yhold', '',
    'lifetime', '',
    'shape', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

save_string_file_compressed: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'filename', '',
    'string', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

set_speed_towards_point: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'px', '',
    'py', '',
    'speed', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dspec_falling_attack: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

grab0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_walk: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec_core_enforcer_draw: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_y: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Ledge_Snap: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_aerial: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

utilt0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ripple_system_init: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Player_Move_To_Front: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_tech: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Wall_Jump: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Input_Buffer_Save: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Melee_Collide: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Layer_Fade_End: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

zair0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dspec_test: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Targetbox_Collide: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uspec_rising_attack: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

on_ground: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[x]', '',
    '[y]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

cancel_charge_check: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_magnetbox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'relative_x', '',
    'relative_y', '',
    'xscale', '',
    'yscale', '',
    'damage', '',
    'hitlag', '',
    'goal_x', '',
    'goal_y', '',
    'magnet_time', '',
    'lifetime', '',
    'shape', '',
    'hitbox_group', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

cancel_jump_check: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Custom_Controls_Unpack: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'profile_num', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

MACROS: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

confetti_burst: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x', '',
    'y', '',
    'direction', '',
    'number', '',
    'speed', '',
    'direction_change', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Register_Tech_Input: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'count', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Wall_Cling: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

button_hold: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'input_index', '',
    '[buffer_amount]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Rolling: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Magnetbox_Collide: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Grab_Release: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

set_state: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'state', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Helpless: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

AI_Input: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'count', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

custom_projectile: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'object', '',
    'relative_x', '',
    'relative_y', '',
    'xscale', '',
    'yscale', '',
    'damage', '',
    'base_kb', '',
    'kb_scaling', '',
    'angle', '',
    'lifetime', '',
    'shape', '',
    'hsp', '',
    'vsp', '',
    '[flipper]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

stick_get_direction: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    '[frame]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Entrance: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fair_zetterburn: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

grab_marth: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

get_char_data: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'character', '',
    'data', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_x_grounded: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'edge_buffer', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

background_define: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'sprite', '',
    'xoff', '',
    'yoff', '',
    'scale', '',
    'move_x', '',
    'move_y', '',
    '[xspd]', '',
    '[yspd]', '',
    '[absolute]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nair0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

bair_forsburn: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

button: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'input_index', '',
    '[buffer_time]', '',
    '[delete_input]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

usmash_sheik: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dsmash_mewtwo: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_ledge_grab: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nair_dedede: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Windbox_Collide: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Custom_Controls_Reset: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'list', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nair_toon_link: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Profile_Clean_Auto: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

pummel0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uspec0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dashattack_claw: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fsmash0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

stick_find_frame: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    'tilt', '',
    'flick', '',
    'dir', '',
    'spd', '',
    'dist', '',
    'frames_back', '',
    'single_frame', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_palette_rgb: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'color_rgb...', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_blastzones: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x1', '',
    'y1', '',
    'x2', '',
    'y2', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

load_string_file_compressed: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'filename', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

easy_tween: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

reverse_b: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

draw_window: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x', '',
    'y', '',
    'width', '',
    'height', '',
    'has_back', '',
    'has_scroll', '',
    'scroll_amt', '',
    'tab_list', '',
    'current_tab', '',
    '[color]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

hurtbox_match_animation: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

destroy_attached_hitboxes_in_group: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'group_number', '',
    'hitbox_list', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Update_Input_Buffer_Replay: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'buffer_index', '',
    'count', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Waveland: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

array_clear: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'array', '',
    'value', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

gamepad_axis_rounded: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'device', '',
    'axisIndex', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec_pit: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uspec_extreme_speed: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Profile_Create: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'name', '',
    'wins', '',
    'games_played', '',
    'custom_controls', '',
    'favorite_skins', '',
    'color', '',
    'auto', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Custom_Controls_Create: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_airdodge: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

projectile_move_x: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[bounce]', '',
    '[bounce_multiplier]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nspec_programmable: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Player_Data_Create: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'character', '',
    'color', '',
    'controller', '',
    'profile', '',
    '[is_random]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Grabbing: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

allow_hitfall: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[unallow]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

draw_text_sprite: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x', '',
    'y', '',
    'string', '',
    'sprite', '',
    '[pad]', '',
    '[randomx]', '',
    '[randomy]', '',
    '[scale]', '',
    '[color]', '',
    '[alpha]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ds_list_value_to_end: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
    'value', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fastfall_try: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Running: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Timestamp_Create: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

match_end: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[room]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

daynight_reset: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dashattack_leap: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

button_reset: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'input_index', '',
    '[value]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Game_Init: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ds_list_to_array: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'list', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

projectile_move_y: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[bounce]', '',
    '[bounce_multiplier]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dsmash0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Ledge_Jump: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_wall_jump: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Layer_Fade_Begin: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dair_yoshi: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

calculate_hitlag: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'base_hitlag', '',
    'dmg', '',
    'scaling', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Profile_Load_All: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Get_Player_State_Name: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'PLAYER_STATE', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Parry_Stun: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_dash_grab: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

character0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_crouch: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

taunt_draw0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

daynight_set: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

cancel_air_check: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_attached_hitbox_group: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'group_number', '',
    'relative_x', '',
    'relative_y', '',
    '[hitbox_list]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Star_KO: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_y_hit_platforms: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Input_Buffer_Load: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Crouching: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

stick_flicked: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    '[direction]', '',
    '[buffer_time]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Update_Input_Buffer: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'buffer_index', '',
    'keyboard', '',
    'count', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

draw_round_bar: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x', '',
    'y', '',
    'width', '',
    'maximum', '',
    'amount', '',
    'angle', '',
    'color', '',
    'center_size', '',
    'sections', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

jab_rapid: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

taunt0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Ledge_Getup: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

is_alive: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'player_id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Walking: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uspec_zss: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

attached_hitbox_group_has_hit: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'group', '',
    '[hitbox_list]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_throws: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

character1: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Voronoi_Change_Color: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'r_range', '',
    'g_range', '',
    'b_range', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Update_Paused_Buffer: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'keyboard', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

destroy_all_attached_hitboxes: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[hitbox_list]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nspec_falcon_punch: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fspec_afterburner_kick: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Grab_Collide: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

jab0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_smashes: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_x_bounce: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_parried: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

draw_surface_safe: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'id', '',
    'x', '',
    'y', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

draw_text_outline_simple: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x', '',
    'y', '',
    'string', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

grab_release: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uthrow_jump: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

bthrow0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Hitlag: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

modulo: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x', '',
    'm', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_wall_cling: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Walk_Turnaround: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Get_Input_Name: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'input', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nspec_charge_shot: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_dash: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Shielding: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Player_Init_End: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Shield_Break: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_shield: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

stick_check: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    'tilt', '',
    'flick', '',
    'dir', '',
    'spd', '',
    'dist', '',
    'frames_back', '',
    'single_frame', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

set_anim_reset: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dair_shulk: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

destroy_hitbox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Profile_Set: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'profile_num', '',
    'setting', '',
    'value', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

css_calculate_design: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'characters', '',
    'max_row_length', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

get_position_in_view: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'x', '',
    'y', '',
    'pad', '',
    'view_x', '',
    'view_y', '',
    'view_w', '',
    'view_h', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fthrow0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

stick_tilted: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    '[directions]', '',
    '[buffer_time]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

move_grounded_: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Camera_Average: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

stick_get_value: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    'direction', '',
    '[frame]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Ledge_Roll: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

camera_shake: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'h', '',
    '[v]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

uair_ike: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

ripple_system_step: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dtilt0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

cancel_airdodge_check: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Standard_Airdodge: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

double_jump: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

reset_hitbox_groups: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[collided_list]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

load_string_file: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'filename', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

stick_get_speed: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'stick', '',
    '[frame]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Spawn_Players: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

set_anim: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'sprite', '',
    '[frame]', '',
    '[speed]', '',
    '[scale]', '',
    '[angle]', '',
    '[color]', '',
    '[alpha]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

create_hurtbox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[sprite]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_waveland: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

nspec_programmable_draw: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

parry0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

calculate_grab_time: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'target_hp', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

dthrow0: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

attack_stop_ext: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[state]', '',
    '[reset_hitboxes]', '',
    '[parry_stun]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

hitfall_try: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

hurtbox_reset: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

on_solid: {
  description: `<p></p>`,
  syntax: '',
  args: [
    '[x]', '',
    '[y]', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

Profile_Draw: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'num', '',
    'x', '',
    'y', '',
    'w', '',
    'h', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

get_player_data: {
  description: `<p></p>`,
  syntax: '',
  args: [
    'player', '',
    'data', '',
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

check_dash_attack: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

bair_fox: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

fsmash_ganon: {
  description: `<p></p>`,
  syntax: '',
  args: [
    
  ],
  returns: '---',
  example: {
    code: ``,
    description: `<p></p>`
  }
},

// end functions

}