import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { parseDTO } from '../dto/users.dto';
import { fromDTO } from '../mappers/users.mapper';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor(private httpClient: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    const url = 'https://dummyjson.com/users';
    // 1. Fetch data from the API
    return this.httpClient.get(url).pipe(
      map((response) => {
        // 2. Parses the response using Zod via parseDTO() to validate it against a predefined schema.
        const dto = parseDTO(response);
        // { success: true, data: { users: [] } }
        if (dto.success) {
          // 3. If parsing is successful, it maps the response into a more optimized format using fromDTO()
          return fromDTO(dto.data);
        } else {
          // 4. If parsing fails, it logs the error and returns an empty array.
          console.error(dto.error);
          return [];
        }
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }
}
