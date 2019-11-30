var macros = [
	//Game Constants
	'debug', 'Bool (false)', 'Turns on or off debug mode, a special mode that shows things like the input buffer, FPS, and state log',
	'show_hitboxes', 'Bool (false)', 'Toggle the visibility of all hitbox objects',
	'show_hurtboxes', 'Bool (false)', 'Toggle the visibility of all hurtbox objects',
	'show_collision_boxes', 'Bool (false)', 'Toggle the visibility of the collision boxes of all players',

	'max_players', 'Int (8)', 'The maximum number of players that the game allows',

	'airdodge_type', 'Int (0)', 'The chosen type of airdodge for the game. 0 = Directional Airdodge, 1 = Brawl Airdodge, 2 = Ultimate Airdodge',
	'shield_type', 'Int (0)', 'The chosen type of shield mechanic for the game. 0 = Melee Shield, 1 = Parry, 2 = Ultimate Shield',
	'walljmp_type', 'Int (0)', 'The chosen type of wall jump mechanic for the game. 0 = Rivals Walljump, 1 = Smash Bros Walljump',
	
	'camera_width', 'Real (960)', 'The width of the camera',
	'camera_height', 'Real (544)', 'The height of the camera',
	'camera_boundary', 'Real (120)', 'The minimum distance of the camera from the edges of the room',
	
	'player_status_padding_bottom', 'Real (54)', 'How far up the player status display is drawn from the bottom of the screen',

	'game_surface_enable', 'Bool (false)', 'Toggle whether the games draws to custom surface',

	'camera_enable_zoom', 'Bool (false)', 'Enable or disable the finishing blow zoom effect',
	'camera_zoom_width', 'Real (480)', 'The width of the camera when fully zoomed in',
	'camera_zoom_height', 'Real (272)', 'The height of the camera when fully zoomed in',

	'back_clear', 'Int (-1)', 'The value that will be recognized as the clear layer in backgrounds. Should not be changed',
	
	'profiles_save', 'String ("Player_Profiles.sav")', 'The filename of the profile save file',
	
	//Player Macros
	'number_of_devices', 'Int (14)', 'The number of ports that are checked for gamepad connections. Should not be changed',
	
	'stick_check_frames', 'Int (3)', `The number of frames back the stick values are stored for checking stick speed.
	Higher numbers will detect higher stick speeds more easily.`,
	
	'Lstick', 'Int (0)', 'A number that represents the Left stick for use in functions. Should not be changed',
	'Rstick', 'Int (1)', 'A number that represents the Right stick for use in functions. Should not be changed',
	'stick_tilt_amount', 'Real (0.4)', 'The control stick threshold that must be passed to count as "tilting" the left stick',
	'stick_flick_speed', 'Real (0.55)', 'The minimum speed for a left stick movement to count as a "flick"',
	'stick_flick_amount', 'Real (0.8)', 'The control stick threshold that must be passed to count as "flicking" the left stick',
	'stick_flick_buff', 'Int (6)', 'The number of frames back that the function "stick_flicked" checks for a flick input',
	'stick_direction_sensitivity', 'Real (65)', 'The angle threshold for the stick to be counted as being in a certain direction',
	
	'rstick_tilt_amount', 'Real (0.4)', 'The control stick threshold that must be passed to count as "tilting" the right stick',
	'rstick_flick_speed', 'Real (0.4)', 'The minimum speed for a right stick movement to count as a "flick"',
	'rstick_flick_amount', 'Real (0.7)', 'The control stick threshold that must be passed to count as "flicking" the right stick',

	'knockback_scaling_multiplier', 'Real (0.12)', 'This is a multiplier used in the knockback formula. A higher number makes knockback greater',

	'hitstun_multiplier', 'Real (0.85)', 'This is the standard multiplier to be used in the hitstun formula',
	'hitstun_base_multiplier', 'Real (4)', 'A multiplier applied to the base knockback of a move in the hitstun formula',
	'hitstun_weight_multiplier', 'Real (0.6)', 'A multiplier applied to the weight of a target in the hitstun formula',
	'hitstun_damage_multiplier', 'Real (0.24)', 'A multiplier applied to the damage of a target in the hitstun formula',
	'hitstun_knockback_multiplier', 'Real (4)', 'A multiplier applied to the knockback scaling in the hitstun formula',
	'hitlag_multiplier', 'Real (0.7)', 'The damage of an attack is multiplied by this to calculate the hitlag of the attack',
	'maximum_hitlag', 'Int (120)', 'The most number of frames a player can be stuck in hitlag',
	'default_shiedlstun_multiplier', 'Real (4)', 'Default multiplier that affects how long the shieldstun of an attack is',
	'base_shieldstun', 'Int (5)', 'A constant amount of shieldstun added to every attack',

	'crouch_cancel_multiplier', 'Real (0.65)', 'A multiplier on knockback when crouch-canceled. Currently unused',

	'max_damage', 'Int (999)', 'The maximum damage a player can have',

	'default_knockback_angle', 'Real (90)', 'The angle a player will be launched if an attack has no specified knockback angle',
	'ASDI', 'Real (4)', 'The number of pixels a player can move in a direction when hitlag finishes (automatic smash directional influence)',
	'DI_Max', 'Real (15)', 'The maximum influence a player has over launch angle. Players can achieve the greatest change in angle if they tilt the control stick perpendicular to the launch angle',
	'drift_DI_accel', 'Real (0.2)', 'The acceleration of drifting during hitstun',
	'drift_DI_max', 'Real (2)', 'The maximum drift speed during hitstun',

	's_angle_knockback_threshold', 'Real (10)', 'The maximum knockback for which the sakurai angle will choose the low angle. If the knockback is greater than this amount, the high angle will be chosen',
	's_angle_low_angle', 'Real (0)', 'The low knockback angle for the sakurai angle',
	's_angle_high_angle', 'Real (40)', 'The high knockback angle for the sakurai angle',
	's_angle_aerial_angle', 'Real (45)', 'The knockback angle for the sakruai angle when the target is in the air',

	'hard_landing_lag', 'Int (20)', 'The landing lag when landing from the tumble state or missing a tech',
	'default_attack_landing_lag', 'Int (6)', 'The default landing lag for every attack',

	'hitbox_groups', 'Int (4)', 'The number of hitbox groups that can be used',
	
	'smash_attack_max_charge', 'Int (100)', 'The maximum number of frames a smash attack can be charged',
	'smash_attack_multiplier', 'Real (0.8)', 'The maximum extra damage multiplier for smash attacks',

	'finishing_blow_hitlag_increase', 'Int (40)', 'The extra hitlag frames added on to finishing blows',

	'hit_turnaround', 'Bool (true)', 'Toggle whether players turn around to face whoever hits them. Note: This is not the same as making the player face away from the direction they are launched',

	'magnetbox_snap_speed', 'Real (10)', 'The snap speed of magnetboxes',

	'base_grab_time', 'Int (30)', 'The minimum amount of time a player can grab another player',
	'grab_time_multiplier', 'Real (0.7)', 'The multiplier on damage that affects how long a player can grab',
	'grab_snap_speed', 'Real (20)', 'The snap speed of grabs',

	'grab_release_hsp', 'Real (4)', 'The horizontal launch speed of a grab release',
	'grab_release_vsp', 'Real (-8)', 'The vertical launch speed of a grab release',
	'grab_release_hitstun', 'Int (20)', 'Both the number of frames of hitstun for the release player and the number of frames of lag for the grabbing player',
	'grab_release_damage', 'Int (3)', 'The amount of damage both players receive from a grab release',

	'platform_check_type', 'Int (1)', "The platform check to use. 0 = Faster but doesn't support overlapping platforms, 1 = Slower but supports overlapping platforms",
	'platform_snap_threshold', 'Real (24)', 'The distance from the ledge for the player to be able to snap to it',

	'bounce_minimum_speed', 'Real (12)', 'The minimum collision speed for a character to bounce',
	'bounce_speed_multiplier', 'Real (0.6)', 'The speed multiplier when bouncing',

	'number_of_buttons', 'Int (13)', 'The number of buttons on a gamepad',
	
	'buff', 'Int (6)', 'The number of frames that are stored in the input buffer',
	'tech_buffer', 'Int (20)', 'The number of frames that are stored in the tech buffer',
];