var macros = [

	'debug', 'Bool (false)', 'Turns on or off debug mode, a special mode that shows things like the input buffer, FPS, and state log',
	'show_hitboxes', 'Bool (false)', 'Toggle the visibility of all hitbox objects',
	'show_hurtboxes', 'Bool (false)', 'Toggle the visibility of all hurtbox objects',
	'show_collision_boxes', 'Bool (false)', 'Toggle the visibility of the collision boxes of all players',

	'max_players', 'Int (8)', 'The maximum number of players that the game allows',

	'camera_width', 'Real (960)', 'The width of the camera',
	'camera_height', 'Real (544)', 'The height of the camera',
	'camera_boundary', 'Real (120)', 'The minimum distance of the camera from the edges of the room',
	
	'back_clear', 'Constant (-1)', 'The value that will be recognized as the clear layer in backgrounds',
	
	'profiles_save', 'String ("Player_Profiles.sav")', 'The filename of the profile save file',
	
	'number_of_devices', 'Constant (14)', 'The number of ports that are checked for gamepad connections',
	
	'stick_check_frames', 'Int (3)', `The number of frames back the stick values are stored for checking stick speed.
	Higher numbers will detect higher stick speeds more easily.`,
	
	'Lstick', 'Constant (0)', 'A number that represents the Left stick for use in functions',
	'Rstick', 'Constant (1)', 'A number that represents the Right stick for use in functions',
	'stick_tilt_amount', 'Real (0.4)', 'The control stick threshold that must be passed to count as "tilting" the left stick',
	'stick_flick_speed', 'Real (0.4)', 'The minimum speed for a left stick movement to count as a "flick"',
	'stick_flick_amount', 'Read (0.7)', 'The control stick threshold that must be passed to count as "flicking" the left stick',
	'stick_flick_buff', 'Int (6)', 'The number of frames back that the function "stick_flicked" checks for a flick input',
	
	'rstick_tilt_amount', 'Real (0.4)', 'The control stick threshold that must be passed to count as "tilting" the right stick',
	'rstick_flick_speed', 'Real (0.4)', 'The minimum speed for a right stick movement to count as a "flick"',
	'rstick_flick_amount', 'Read (0.7)', 'The control stick threshold that must be passed to count as "flicking" the right stick',
]