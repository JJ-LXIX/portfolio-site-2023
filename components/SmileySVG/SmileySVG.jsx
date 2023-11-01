import {
  useTransform,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React from "react";

export const SmileySVG = () => {
  return (
    <svg
      className="fixed top-10 right-0 mix-blend-difference"
      width="200"
      height="200"
      viewBox="0 0 210 297"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsSvg="http://www.w3.org/2000/svg"
    >
      <defs id="defs1" />
      <g id="layer1">
        <motion.path
          style={{ fill: "#fff", strokeWidth: "0.264583" }}
          id="path8"
          d="m 65.94834,60.844823 c 0.240519,6.631456 0.539276,13.26215 0.979723,19.883507 0.415149,6.034722 1.088609,12.045828 1.788763,18.052584 0.327472,2.809406 4.300572,2.346286 3.973099,-0.463116 v 0 c -0.692531,-5.941137 -1.359728,-11.886459 -1.770702,-17.855245 -0.43552,-6.532928 -0.726546,-13.075047 -0.970884,-19.61773 0,-2.828427 -3.999999,-2.828427 -3.999999,0 z"
        />
        <motion.path
          style={{ fill: "#fff", strokeWidth: "0.264583" }}
          id="path9"
          d="m 95.173431,56.139444 c 0.228949,6.024343 1.201441,11.996444 2.093402,17.950421 0.749154,5.0145 1.548471,10.017577 2.519868,14.993813 0.349309,1.623962 0.455409,3.281926 0.673349,4.924914 0.30487,2.049413 0.84698,4.052501 1.33874,6.062248 0.67225,2.74738 4.55763,1.79668 3.88538,-0.950699 v 0 c -0.45769,-1.870514 -0.96586,-3.73398 -1.25913,-5.639676 -0.23047,-1.722395 -0.33992,-3.461326 -0.71244,-5.163182 -0.96022,-4.918551 -1.74929,-9.863738 -2.48992,-14.820116 -0.86287,-5.758302 -1.804491,-11.532868 -2.049249,-17.357723 0,-2.828427 -4,-2.828427 -4,0 z"
        />
        <motion.path
          style={{ fill: "#fff", strokeWidth: "0.27053" }}
          id="path10"
          d="m 56.447635,122.47121 c 1.203965,6.39723 3.90795,12.45113 6.566588,18.43663 2.794188,5.85395 5.939749,11.68418 10.617345,16.53877 0.836975,0.86865 1.771344,1.65884 2.657018,2.48827 1.02405,0.72629 1.982743,1.53122 3.072156,2.17884 3.540184,2.10458 7.629465,3.27973 11.893981,3.58546 3.862212,0.27686 5.041301,-0.064 8.824767,-0.55268 2.90266,-0.84795 5.06253,-1.20191 7.49098,-2.9959 4.89686,-3.61753 7.71548,-9.88955 10.08618,-14.96181 2.31718,-5.41134 3.6728,-11.06354 4.37582,-16.78194 0.22032,-1.84792 0.24702,-3.70195 0.10668,-5.5485 -0.0358,-0.41698 -0.0799,-0.83319 -0.12277,-1.24951 -0.27949,-2.7114 -4.59844,-2.29069 -4.31895,0.42074 v 0 c 0.0404,0.38674 0.0808,0.77348 0.1149,1.1608 0.12555,1.62003 0.10109,3.24643 -0.0912,4.86791 -0.65028,5.35119 -1.91449,10.64062 -4.06643,15.70851 -1.38678,2.98485 -1.9915,4.51508 -3.74859,7.36797 -1.00165,1.62632 -2.86945,4.40357 -4.52861,5.72356 -1.84231,1.46572 -3.60305,1.77189 -5.867667,2.47389 -3.228542,0.45009 -4.217998,0.74778 -7.515676,0.55471 -3.525308,-0.2064 -6.958015,-1.1114 -9.909772,-2.81837 -0.933415,-0.53978 -1.755993,-1.21625 -2.63399,-1.82439 -0.791143,-0.7318 -1.627387,-1.42694 -2.373431,-2.19542 -4.43674,-4.57021 -7.378636,-10.09263 -10.025334,-15.61447 -2.569227,-5.7781 -5.196618,-11.62012 -6.353469,-17.79807 -0.609822,-2.66299 -4.860206,-1.82795 -4.250385,0.83505 z"
        />
        <motion.path
          style={{ fill: "#fff", strokeWidth: "0.264583" }}
          id="path11"
          d="m 58.877197,38.957379 c -5.974725,4.060661 -11.018239,9.43933 -15.052415,15.420371 -1.565259,2.320645 -2.910269,4.782471 -4.365405,7.173706 -3.550947,7.131807 -5.823824,11.094606 -8.364154,18.822898 -4.156623,12.645418 -6.442579,26.128716 -6.831141,39.426516 -0.124664,4.26641 0.184443,8.53447 0.276664,12.8017 0.79216,4.1797 1.285684,8.42723 2.37648,12.53911 2.877898,10.84859 8.030306,21.17924 14.898413,30.04643 1.880865,2.42832 3.824674,4.84874 6.124244,6.885 2.410579,2.13456 5.273855,3.69533 7.910783,5.54299 3.013797,1.35397 5.927018,2.95879 9.041394,4.06191 6.000922,2.12553 13.982618,3.6488 20.296174,4.43232 5.825562,0.72296 11.890613,1.02171 17.755806,0.50818 2.53293,-0.22178 5.02445,-0.78391 7.53667,-1.17586 2.53877,-1.04559 5.18341,-1.86411 7.6163,-3.13677 7.53885,-3.94361 14.01245,-9.99903 19.1826,-16.68725 1.78164,-2.30477 3.47938,-4.692 4.91036,-7.22944 1.61829,-2.86956 2.80634,-5.96133 4.20951,-8.942 1.11169,-3.15429 2.4103,-6.24881 3.33508,-9.46288 2.06638,-7.1816 3.3196,-14.62757 3.98568,-22.06202 0.62111,-6.93248 0.76143,-15.1523 -0.0595,-22.08557 -0.45134,-3.81172 -1.38013,-7.551611 -2.07019,-11.32741 -1.04896,-3.582923 -1.94087,-7.215616 -3.14689,-10.748771 -3.15686,-9.248352 -7.45389,-18.179979 -13.14308,-26.146159 -1.59518,-2.233621 -3.27438,-4.420802 -5.14803,-6.42656 -1.89616,-2.029849 -4.08612,-3.763836 -6.12917,-5.645751 -2.18336,-1.5626 -4.28224,-3.250538 -6.55008,-4.687797 -7.9097,-5.012849 -16.84524,-8.313034 -25.911245,-10.510856 -1.687592,-0.409115 -3.39883,-0.713669 -5.098243,-1.070504 -5.923002,-1.148064 -11.943408,-1.505604 -17.96307,-1.496642 -0.552646,0.0078 -1.105289,0.0155 -1.657932,0.02326 -2.828145,0.03994 -2.771667,4.039536 0.05648,3.9996 v 0 c 0.536045,-0.0076 1.072089,-0.01524 1.608132,-0.02286 5.742265,-0.01066 11.485604,0.322077 17.136911,1.411806 1.624735,0.338942 3.260691,0.627957 4.874205,1.016831 8.607485,2.074494 17.107722,5.176287 24.632832,9.906457 2.13546,1.342322 4.11346,2.920209 6.17019,4.380312 1.90418,1.733733 3.94818,3.325355 5.71254,5.201198 1.78378,1.896494 3.38211,3.967162 4.9003,6.082263 5.48811,7.645884 9.62041,16.227866 12.67147,25.112971 1.16773,3.400595 2.03393,6.897365 3.0509,10.346041 0.66985,3.6046 1.57086,7.173821 2.00955,10.813781 0.80905,6.71294 0.67925,14.63948 0.0882,21.35195 -0.62772,7.12914 -1.82695,14.36712 -3.7938,21.25857 -0.88149,3.08853 -2.12301,6.06275 -3.18452,9.09412 -1.29966,2.79829 -2.39442,5.7012 -3.89899,8.39486 -1.34094,2.40072 -2.93773,4.65838 -4.61089,6.84062 -4.78829,6.24518 -10.7533,11.87134 -17.71841,15.62999 -2.13654,1.15296 -4.46162,1.91585 -6.69242,2.87378 -2.34084,0.37608 -4.66132,0.91446 -7.02252,1.12823 -5.632689,0.50995 -11.39447,0.22831 -16.992976,-0.45626 -5.94709,-0.7272 -13.647227,-2.17287 -19.32151,-4.14021 -2.887848,-1.00124 -5.594244,-2.46435 -8.391366,-3.69653 -2.401105,-1.63928 -5.01641,-3.00211 -7.203311,-4.91783 -2.1811,-1.91064 -4.022616,-4.19137 -5.805638,-6.47798 -6.563947,-8.41782 -11.490264,-18.23099 -14.272516,-28.54297 -1.050393,-3.89312 -1.537259,-7.91679 -2.305886,-11.87519 -0.09581,-4.13522 -0.402305,-8.27092 -0.287427,-12.40566 0.356253,-12.82238 2.57041,-26.054687 6.559888,-38.255217 2.442048,-7.468217 4.648909,-11.335438 8.066918,-18.22581 1.376783,-2.27612 2.648752,-4.619037 4.130355,-6.828364 3.770413,-5.622351 8.479628,-10.699392 14.086519,-14.512443 2.353395,-1.568929 0.134594,-4.897131 -2.218801,-3.328202 z"
        />
      </g>
    </svg>
  );
};
