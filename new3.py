def reward_function(params):
    '''
    Reward function for AWS DeepRacer
    '''
    # Read input parameters
    track_width = params['track_width']
    distance_from_center = params['distance_from_center']
    speed = params['speed']
    progress = params['progress']
    steps = params['steps']
    waypoints = params['waypoints']
    closest_waypoints = params['closest_waypoints']
    heading = params['heading']
    
    # Initialize the reward with a small number to ensure the car receives some reward
    reward = 1.0
    
    # Calculate markers that are at varying distances from the center line
    marker_1 = 0.1 * track_width
    marker_2 = 0.25 * track_width
    marker_3 = 0.5 * track_width
    
    # Give higher reward if the car is closer to center line and vice versa
    if distance_from_center <= marker_1:
        reward = 1.0
    elif distance_from_center <= marker_2:
        reward = 0.5
    elif distance_from_center <= marker_3:
        reward = 0.1
    else:
        reward = 1e-3  # likely crashed/ close to off track
    
    # Speed incentive: encourage maintaining an optimal speed between 2 and 4 m/s
    SPEED_THRESHOLD = 2.0
    if speed < SPEED_THRESHOLD:
        reward *= 0.5

    # Add progress factor to encourage the car to complete the track
    if (steps % 100) == 0:
        progress_reward = (progress / steps) * 100
        reward += progress_reward
    
    # Random noise to avoid overtraining
    import random
    reward *= random.uniform(0.9, 1.1)
    
    return float(reward)
