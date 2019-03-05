package com.sample.login.user.service;

import com.sample.login.NoSuchException;
import com.sample.login.user.entity.User;
import com.sample.login.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User login(User user){
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).orElseThrow(()-> new NoSuchException("없는 유저"));
    }
}
