<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'consulting' );

/** Database username */
define( 'DB_USER', 'guest' );

/** Database password */
define( 'DB_PASSWORD', '123456789' );

/** Database hostname */
define( "DB_HOST", "192.168.123.18" );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fYHJpziMh+z!x3K!r;^?J[U~qw,mFbY2ISFE~|9k;r/iI:>^sq|,$=-M7r~4&Qu3' );
define( 'SECURE_AUTH_KEY',  'n6=2< GhUy |,.pKlN!Ls~Q9^[CB*L++.6^(u7L/!&J#OT1BFO/}Hk5j5o]M ([%' );
define( 'LOGGED_IN_KEY',    '!59nO!oc6+=:[tqypWhWu33l;vpTT+4]@QwC2gb;Jwe->sk`1-wg*3BO57{ZR:Q?' );
define( 'NONCE_KEY',        'J9G-/NH!8/E91Y||p1F2*U;6aQysq3xb9Y4?WBZL,2[x%V9Gu2F ]@c_l{C,ZT6l' );
define( 'AUTH_SALT',        '#F9(*v~)Y!KMe`ih!<Z`J],|QJaKRK)hH|n5bjOvp|iv3Q?/|.!UO6~+(|,yo((q' );
define( 'SECURE_AUTH_SALT', 's%,Jm,v%2q6 C|3vlI`o4&O8lt_eh@;Y]X]2}F=[[Su#S9H>GF]d/hqL`U4%)[]i' );
define( 'LOGGED_IN_SALT',   'OL!#5L$h5mhZH 2@H@3_<5)qry3cIK4Gz)@X=.uDhY7 fCP.RoA)y`WjVf79X5Ka' );
define( 'NONCE_SALT',       'V5ollg?-7_$6rgEQ{64:H{*?y5bP+>*>Jx5C;k&i e)T%RQ^o%uC!)Nxl:4X~_)N' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_consulting';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
