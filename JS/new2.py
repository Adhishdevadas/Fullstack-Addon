def reward_function(params):
    '''
    Reward function for AWS DeepRacer
    '''
    
    # Read input parameters
    track_width = params['track_width']
    distance_from_center = params['distance_from_center']
    all_wheels_on_track = params['all_wheels_on_track']
    speed = params['speed']
    steps = params['steps']
    progress = params['progress']
    waypoints = params['waypoints']
    closest_waypoints = params['closest_waypoints']
    heading = params['heading']
    
    # Initialize reward
    reward = 1.0
    
    # Reward for staying on track
    if not all_wheels_on_track:
        return 1e-3  # Likely crashed/ close to off track, give minimum reward

    # Calculate 3 markers that are at varying distances away from the center line
    marker_1 = 0.1 * track_width
    marker_2 = 0.25 * track_width
    marker_3 = 0.5 * track_width
    
    # Give higher reward if the car is closer to the center line
    if distance_from_center <= marker_1:
        reward = 1.0
    elif distance_from_center <= marker_2:
        reward = 0.5
    elif distance_from_center <= marker_3:
        reward = 0.1
    else:
        reward = 1e-3  # likely crashed/ close to off track
    
    # Penalize reward if the car is steering too much (steering angle too large)
    steering = abs(params['steering_angle'])  # Only need the absolute steering angle
    if steering > 15:
        reward *= 0.8
        
    # Reward for making progress
    if (steps % 100) == 0 and progress > (steps / 300) * 100:
        reward += 10.0

    # Encourage the car to maintain a higher speed
    SPEED_THRESHOLD = 2.0
    if speed < SPEED_THRESHOLD:
        reward *= 0.5
    
    return float(reward)
