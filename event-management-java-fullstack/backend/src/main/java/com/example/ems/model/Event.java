package com.example.ems.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalDate;

@Entity
@Table(name = "events")
public class Event {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length=2000)
    private String description;
    private LocalDate date;
    private String time;
    private String imageUrl;
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();

    // getters/setters
    public Long getId(){return id;}
    public void setId(Long id){this.id=id;}
    public String getTitle(){return title;}
    public void setTitle(String t){this.title=t;}
    public String getDescription(){return description;}
    public void setDescription(String d){this.description=d;}
    public LocalDate getDate(){return date;}
    public void setDate(LocalDate d){this.date=d;}
    public String getTime(){return time;}
    public void setTime(String t){this.time=t;}
    public String getImageUrl(){return imageUrl;}
    public void setImageUrl(String u){this.imageUrl=u;}
    public LocalDateTime getCreatedAt(){return createdAt;}
    public void setCreatedAt(LocalDateTime t){this.createdAt=t;}
    public LocalDateTime getUpdatedAt(){return updatedAt;}
    public void setUpdatedAt(LocalDateTime t){this.updatedAt=t;}
}
