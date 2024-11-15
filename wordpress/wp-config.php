<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cuoikytest' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         '-SrlJyXmeW4mXd>SLS4?eC*6E 51+<7rNZ7AZu3WwIN=%wg&>f>U(p*j l%[1i]!' );
define( 'SECURE_AUTH_KEY',  'Co(e$}Q#S;aL;vFb_}==3`Ol iK*#EXpuYbO<8S*y7X55]_@lFl*42n=.9FSw(t5' );
define( 'LOGGED_IN_KEY',    'W9YH&$[`T&k?5 Hql,HoKnHD19)xVII)/g?($peK2{J @Ix>]D_|n6=>4tu2%*IR' );
define( 'NONCE_KEY',        '_FS)|TMw=8n/<px|`Z4GTwM087jFEo-%7&nt&l{>,u5KIZ< YrjE^;TNz~2zE|uR' );
define( 'AUTH_SALT',        'T8kPzL)2pkSX3$t@q.MB(1P?dg}#w(R86fA2n.Pr/PMEiJ8%VlssBHzeZvLW4aWS' );
define( 'SECURE_AUTH_SALT', 'Xa^wlPdMN!wbgRqb_^72JDEAtMffAAI/oIDj5~:$cl~$bn<}/dfTts*NM)IC3h~.' );
define( 'LOGGED_IN_SALT',   '9l4h*fv-lw}6%0 UHMQ.V0$7o==S+jv(IDC-s>l}1KaY3;x%&p/Z|%an]4BO~LNJ' );
define( 'NONCE_SALT',       'jk$c+JgM=6B$r&!]MtfK%CkmEyLWL0x6Qum}rVGUKl4l^&wL]z{]Jk)6b)!3_{sV' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
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
