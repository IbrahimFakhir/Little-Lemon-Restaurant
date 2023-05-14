package com.fakhir.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DateTimeRepository extends JpaRepository<Entity, Integer> {

    Entity getAllByAvailable(boolean b);
}
