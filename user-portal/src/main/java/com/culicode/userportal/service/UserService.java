package com.culicode.userportal.service;

import com.culicode.userportal.domain.User;
import com.culicode.userportal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    User create(User user);
    void delete(int id);
    User update(User user);
    Iterable<User> findAll();
    Optional<User> findById(int id);
}
