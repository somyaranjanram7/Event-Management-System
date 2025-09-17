package com.example.ems.controller;

import com.example.ems.model.Event;
import com.example.ems.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventRepository eventRepository;

    @GetMapping
    public List<Event> list(){ return eventRepository.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id){
        Optional<Event> e = eventRepository.findById(id);
        return e.<ResponseEntity<?>>map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Event event){
        Event saved = eventRepository.save(event);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Event ev){
        Optional<Event> o = eventRepository.findById(id);
        if(o.isEmpty()) return ResponseEntity.notFound().build();
        Event existing = o.get();
        existing.setTitle(ev.getTitle());
        existing.setDescription(ev.getDescription());
        existing.setDate(ev.getDate());
        existing.setTime(ev.getTime());
        existing.setImageUrl(ev.getImageUrl());
        existing.setUpdatedAt(java.time.LocalDateTime.now());
        eventRepository.save(existing);
        return ResponseEntity.ok(existing);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        if(!eventRepository.existsById(id)) return ResponseEntity.notFound().build();
        eventRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
