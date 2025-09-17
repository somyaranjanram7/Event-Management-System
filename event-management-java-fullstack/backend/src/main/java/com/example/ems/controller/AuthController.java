package com.example.ems.controller;

import com.example.ems.dto.AuthRequest;
import com.example.ems.dto.AuthResponse;
import com.example.ems.model.User;
import com.example.ems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    // simple signup
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user){
        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            return ResponseEntity.badRequest().body("Email already exists");
        }
        String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashed);
        if(user.getRole()==null) user.setRole("NORMAL");
        userRepository.save(user);
        return ResponseEntity.ok("User created");
    }

    // simple login: returns a fake token (UUID) and role. Replace with real JWT in production.
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req){
        Optional<User> uo = userRepository.findByEmail(req.email());
        if(uo.isEmpty()) return ResponseEntity.status(401).body("Invalid credentials");
        User u = uo.get();
        if(!BCrypt.checkpw(req.password(), u.getPassword())) return ResponseEntity.status(401).body("Invalid credentials");
        // For brevity we return a dummy token and role. Frontend expects { token, role }.
        String token = UUID.randomUUID().toString();
        return ResponseEntity.ok(new AuthResponse(token, u.getRole()));
    }
}
